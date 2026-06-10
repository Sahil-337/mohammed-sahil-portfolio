import { useEffect, useState } from 'react'

// Lightweight typewriter rotator. No deps. Respects prefers-reduced-motion.
export default function TypeRotator({
  words = [],
  typeSpeed = 55,
  deleteSpeed = 32,
  pauseAfter = 1400,
}) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  // Honor reduced-motion: just show the first word, no animation.
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduce) {
      setText(words[0] || '')
      return
    }
    const word = words[idx % words.length]
    let timeout

    if (phase === 'typing') {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseAfter)
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed)
      } else {
        setIdx((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, idx, words, typeSpeed, deleteSpeed, pauseAfter, reduce])

  return (
    <span className="inline-flex items-baseline">
      <span className="italic text-accent dark:text-accent-glow">{text}</span>
      <span
        className="ml-0.5 inline-block h-[0.9em] w-[2px] -translate-y-[2px] bg-accent dark:bg-accent-glow"
        style={{ animation: 'cursorBlink 1s steps(2, start) infinite' }}
        aria-hidden="true"
      />
    </span>
  )
}
