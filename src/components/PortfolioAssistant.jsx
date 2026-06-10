import { useEffect, useRef, useState } from 'react'
import { Bot, X, Send, Sparkles, RotateCcw } from 'lucide-react'
import { answerQuery, SUGGESTED_QUESTIONS } from '../lib/assistantEngine'
import { trackEvent, EVENTS } from '../lib/analytics'

// SahilAI — portfolio assistant.
// Default: client-side retrieval (free, instant, no API key).
// If /api/chat is deployed with an LLM key, it upgrades automatically.

const WELCOME = {
  role: 'assistant',
  text: "Hi! I'm SahilAI 🤖 — an assistant built into this portfolio. I answer from Mohammed's real project, experience, and skills data. What would you like to know?",
}

async function getAnswer(query, history) {
  // Try the serverless LLM endpoint first (if deployed)
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, history: history.slice(-6) }),
    })
    if (res.ok) {
      const data = await res.json()
      if (data && data.text) return { text: data.text, sources: data.sources || [], llm: true }
    }
  } catch {
    // endpoint not deployed — fall through to local retrieval
  }
  // Local retrieval fallback (always works)
  return { ...answerQuery(query), llm: false }
}

export default function PortfolioAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      trackEvent(EVENTS.ASSISTANT_OPEN)
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const ask = async (q) => {
    const query = (q || input).trim()
    if (!query || typing) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text: query }])
    setTyping(true)
    trackEvent(EVENTS.ASSISTANT_QUESTION, { q: query.slice(0, 80) })

    const t0 = Date.now()
    const result = await getAnswer(query, messages)
    // Minimum "thinking" delay so the typing indicator reads naturally
    const wait = Math.max(0, 650 - (Date.now() - t0))
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { role: 'assistant', text: result.text }])
    }, wait)
  }

  const reset = () => setMessages([WELCOME])

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close SahilAI assistant' : 'Open SahilAI assistant'}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-3 text-sm font-medium text-paper shadow-xl transition hover:scale-105 hover:bg-ink-800 dark:bg-accent-glow dark:text-night-900 dark:hover:bg-accent"
      >
        {open ? <X size={18} /> : (
          <>
            <span className="relative inline-flex">
              <Bot size={18} />
              <span className="absolute -right-1 -top-1 inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-75 dark:bg-night-900" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow dark:bg-night-900" />
              </span>
            </span>
            <span className="hidden sm:inline">Ask SahilAI</span>
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 z-50 flex h-[min(580px,75vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-2xl dark:border-white/10 dark:bg-night-800 animate-fade-up"
          role="dialog"
          aria-label="SahilAI portfolio assistant"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink-900/10 bg-ink-900 px-4 py-3 text-paper dark:border-white/10 dark:bg-night-900">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-glow/20 text-accent-glow">
                <Bot size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold">SahilAI</p>
                <p className="flex items-center gap-1.5 text-[10px] text-ink-300">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-glow animate-pulse-soft" />
                  Retrieval over portfolio data
                </p>
              </div>
            </div>
            <button
              onClick={reset}
              aria-label="Reset conversation"
              className="rounded-md p-1.5 text-ink-300 transition hover:bg-white/10 hover:text-paper"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <Message key={i} m={m} />
            ))}
            {typing && (
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-ink-900/5 px-4 py-3 w-fit dark:bg-white/5">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="inline-block h-1.5 w-1.5 rounded-full bg-ink-400 dark:bg-ink-300"
                    style={{
                      animation: 'pulseSoft 1s ease-in-out infinite',
                      animationDelay: `${d * 0.18}s`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Suggested questions — only while conversation is fresh */}
            {messages.length <= 1 && !typing && (
              <div className="space-y-1.5 pt-1">
                <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">
                  <Sparkles size={10} /> Try asking
                </p>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => ask(q)}
                    className="block w-full rounded-xl border border-ink-900/10 bg-paper px-3 py-2 text-left text-xs text-ink-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-night-700 dark:text-ink-200 dark:hover:border-accent-glow dark:hover:text-accent-glow"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-ink-900/10 p-3 dark:border-white/10">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && ask()}
                placeholder="Ask about projects, skills, experience…"
                className="flex-1 rounded-full border border-ink-900/10 bg-paper px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-night-700 dark:text-ink-100 dark:placeholder:text-ink-300"
                aria-label="Ask SahilAI a question"
              />
              <button
                onClick={() => ask()}
                disabled={!input.trim() || typing}
                aria-label="Send"
                className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink-900 text-paper transition hover:bg-ink-800 disabled:opacity-40 dark:bg-accent-glow dark:text-night-900 dark:hover:bg-accent"
              >
                <Send size={15} />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-ink-400 dark:text-ink-500">
              Built by Mohammed · answers grounded in portfolio data
            </p>
          </div>
        </div>
      )}
    </>
  )
}

function Message({ m }) {
  const isUser = m.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'rounded-tr-sm bg-ink-900 text-paper dark:bg-accent-glow dark:text-night-900'
            : 'rounded-tl-sm bg-ink-900/5 text-ink-800 dark:bg-white/5 dark:text-ink-100'
        }`}
      >
        <FormattedText text={m.text} />
      </div>
    </div>
  )
}

// Minimal formatter: **bold**, links, bullets — no markdown lib needed.
function FormattedText({ text }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {formatLine(line)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  )
}

function formatLine(line) {
  // Split on **bold** and URLs
  const parts = line.split(/(\*\*[^*]+\*\*|https?:\/\/\S+)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('http')) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:opacity-80"
        >
          {part.replace(/^https?:\/\/(www\.)?/, '').slice(0, 40)}
        </a>
      )
    }
    return part
  })
}
