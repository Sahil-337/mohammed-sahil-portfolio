import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-[5.5rem] right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-paper shadow-lg transition hover:bg-ink-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:bg-night-700 dark:text-ink-100 dark:hover:bg-night-600"
    >
      <ArrowUp size={18} />
    </button>
  )
}
