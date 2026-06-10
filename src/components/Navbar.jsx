import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { href: 'about', label: 'About' },
  { href: 'experience', label: 'Experience' },
  { href: 'projects', label: 'Projects' },
  { href: 'dashboards', label: 'Dashboards' },
  { href: 'roles', label: 'Roles' },
  { href: 'achievements', label: 'Achievements' },
  { href: 'skills', label: 'Skills' },
  { href: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const active = useActiveSection(links.map((l) => l.href))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? 'border-b border-ink-900/10 bg-paper/85 backdrop-blur dark:border-white/10 dark:bg-night-900/85'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          className="font-display text-xl tracking-tight text-ink-900 dark:text-ink-100"
          aria-label="Mohammed Sahil — home"
        >
          Mohammed Sahil
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href
            return (
              <li key={l.href}>
                <a
                  href={`#${l.href}`}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? 'bg-ink-900 text-paper dark:bg-accent-glow dark:text-night-900'
                      : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-100'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border border-ink-900/10 bg-white p-2 text-ink-700 transition hover:bg-ink-900/5 dark:border-white/10 dark:bg-night-700 dark:text-ink-200 dark:hover:bg-night-600"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink-800 dark:bg-accent-glow dark:text-night-900 dark:hover:bg-accent md:inline-flex"
          >
            Let's connect
          </a>
          <button
            className="rounded-md p-2 text-ink-800 dark:text-ink-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-900/10 bg-paper dark:border-white/10 dark:bg-night-900 lg:hidden">
          <ul className="mx-auto max-w-content px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={`#${l.href}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink-700 dark:text-ink-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
