import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Command as CommandIcon,
  Search,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  Download,
  Copy,
  Check,
  User,
  BarChart3,
  Briefcase,
  Award,
  MessageSquare,
  FolderKanban,
  Sparkles,
  X,
} from 'lucide-react'
import { profile, projects } from '../data/content'

const sectionItems = [
  { id: 'about', label: 'About', icon: User, kind: 'Section', href: '#about' },
  { id: 'dashboards', label: 'Dashboards', icon: BarChart3, kind: 'Section', href: '#dashboards' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, kind: 'Section', href: '#projects' },
  { id: 'experience', label: 'Experience', icon: Briefcase, kind: 'Section', href: '#experience' },
  { id: 'leadership', label: 'Leadership', icon: Sparkles, kind: 'Section', href: '#leadership' },
  { id: 'achievements', label: 'Achievements', icon: Award, kind: 'Section', href: '#achievements' },
  { id: 'skills', label: 'Skills', icon: BarChart3, kind: 'Section', href: '#skills' },
  { id: 'contact', label: 'Contact', icon: MessageSquare, kind: 'Section', href: '#contact' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  // Hotkey: ⌘K / Ctrl+K toggles. Esc closes.
  useEffect(() => {
    const onKey = (e) => {
      const isMod = e.metaKey || e.ctrlKey
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Lock scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 50)
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      // ignore
    }
  }

  const actionItems = useMemo(
    () => [
      {
        id: 'email',
        label: 'Email Mohammed',
        icon: Mail,
        kind: 'Action',
        onSelect: () => (window.location.href = `mailto:${profile.email}`),
      },
      {
        id: 'copy-email',
        label: copied ? 'Email copied!' : 'Copy email address',
        icon: copied ? Check : Copy,
        kind: 'Action',
        onSelect: copyEmail,
        keepOpen: true,
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        icon: Linkedin,
        kind: 'Action',
        href: profile.linkedin,
        external: true,
      },
      {
        id: 'github',
        label: 'Open GitHub',
        icon: Github,
        kind: 'Action',
        href: profile.github,
        external: true,
      },
      {
        id: 'resume',
        label: 'Download Resume (PDF)',
        icon: Download,
        kind: 'Action',
        onSelect: () => {
          const a = document.createElement('a')
          a.href = profile.resumePath
          a.download = ''
          a.click()
        },
      },
    ],
    [copied],
  )

  const projectItems = useMemo(
    () =>
      projects.map((p) => ({
        id: `project-${p.id}`,
        label: p.title,
        sub: p.tools.slice(0, 4).join(' · '),
        icon: FolderKanban,
        kind: 'Project',
        href: '#projects',
        meta: p.featured ? 'Featured' : null,
      })),
    [],
  )

  const allItems = useMemo(
    () => [...sectionItems, ...actionItems, ...projectItems],
    [actionItems, projectItems],
  )

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return allItems
    return allItems.filter((it) => {
      const hay = `${it.label} ${it.kind} ${it.sub || ''}`.toLowerCase()
      // simple fuzzy: every char of query must appear in order
      let i = 0
      for (const ch of hay) {
        if (ch === query[i]) i++
        if (i === query.length) return true
      }
      return hay.includes(query)
    })
  }, [q, allItems])

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIdx(0)
  }, [q, open])

  // Scroll active into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIdx}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIdx])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx((i) => Math.min(filtered.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => Math.max(0, i - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const item = filtered[activeIdx]
      if (item) selectItem(item)
    }
  }

  const selectItem = (item) => {
    if (item.onSelect) {
      item.onSelect()
      if (!item.keepOpen) setOpen(false)
      return
    }
    if (item.href) {
      if (item.external) {
        window.open(item.href, '_blank', 'noopener,noreferrer')
      } else {
        // smooth scroll to anchor
        const id = item.href.replace('#', '')
        const target = document.getElementById(id)
        if (target) {
          setOpen(false)
          setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
          return
        } else {
          window.location.hash = item.href
        }
      }
      setOpen(false)
    }
  }

  return (
    <>
      {/* Floating launcher (also visible on mobile where ⌘K isn't natural) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-white/90 px-3.5 py-2 text-xs font-medium text-ink-700 shadow-lg backdrop-blur transition hover:border-accent hover:text-accent dark:border-white/15 dark:bg-night-800/90 dark:text-ink-200 dark:hover:border-accent-glow dark:hover:text-accent-glow"
      >
        <Search size={14} />
        <span className="hidden sm:inline">Quick search</span>
        <kbd className="hidden items-center rounded border border-ink-900/15 bg-ink-900/5 px-1.5 py-0.5 font-mono text-[10px] text-ink-500 sm:inline-flex dark:border-white/15 dark:bg-white/10 dark:text-ink-300">
          ⌘K
        </kbd>
      </button>

      {!open ? null : (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm dark:bg-night-900/70"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-2xl dark:border-white/10 dark:bg-night-800 animate-fade-up">
            <div className="flex items-center gap-3 border-b border-ink-900/10 px-4 py-3 dark:border-white/10">
              <CommandIcon size={16} className="text-ink-400 dark:text-ink-300" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search sections, projects, or actions…"
                className="flex-1 bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none dark:text-ink-100 dark:placeholder:text-ink-300"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-md p-1 text-ink-500 hover:bg-ink-900/5 dark:text-ink-300 dark:hover:bg-white/10"
              >
                <X size={14} />
              </button>
            </div>

            <div ref={listRef} className="max-h-[55vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-ink-500 dark:text-ink-300">
                  No matches. Try "projects" or "email".
                </p>
              )}

              {filtered.map((item, i) => {
                const Icon = item.icon
                const isActive = i === activeIdx
                return (
                  <button
                    key={item.id}
                    data-idx={i}
                    onMouseEnter={() => setActiveIdx(i)}
                    onClick={() => selectItem(item)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                      isActive
                        ? 'bg-accent/10 text-accent dark:bg-accent-glow/10 dark:text-accent-glow'
                        : 'text-ink-700 hover:bg-ink-900/5 dark:text-ink-200 dark:hover:bg-white/5'
                    }`}
                  >
                    <Icon size={16} className="flex-none" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{item.label}</p>
                      {item.sub && (
                        <p className="mt-0.5 truncate font-mono text-[11px] text-ink-500 dark:text-ink-300">
                          {item.sub}
                        </p>
                      )}
                    </div>
                    <span className="hidden items-center gap-1.5 text-[10px] uppercase tracking-wider text-ink-500 sm:inline-flex dark:text-ink-300">
                      {item.meta && (
                        <span className="rounded bg-accent/10 px-1.5 py-0.5 font-semibold text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
                          {item.meta}
                        </span>
                      )}
                      <span>{item.kind}</span>
                    </span>
                    {item.external ? (
                      <ArrowUpRight size={14} className="flex-none text-ink-400 dark:text-ink-300" />
                    ) : (
                      <ArrowRight size={14} className="flex-none text-ink-400 dark:text-ink-300" />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="flex items-center justify-between border-t border-ink-900/10 bg-paper px-4 py-2 text-[11px] text-ink-500 dark:border-white/10 dark:bg-night-900 dark:text-ink-300">
              <div className="flex items-center gap-3">
                <Hint label="↑↓" desc="navigate" />
                <Hint label="↵" desc="select" />
                <Hint label="esc" desc="close" />
              </div>
              <p className="font-mono">{filtered.length} results</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Hint({ label, desc }) {
  return (
    <span className="inline-flex items-center gap-1">
      <kbd className="inline-flex items-center rounded border border-ink-900/15 bg-white px-1.5 py-0.5 font-mono text-[10px] text-ink-700 dark:border-white/15 dark:bg-night-800 dark:text-ink-200">
        {label}
      </kbd>
      <span>{desc}</span>
    </span>
  )
}
