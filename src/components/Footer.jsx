export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-paper dark:border-white/10 dark:bg-night-900">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-ink-500 dark:text-ink-300 md:flex-row md:items-center md:px-8">
        <p>
          © 2026 Mohammed Sahil. Built to showcase data science, analytics, and AI/ML work.
        </p>
        <p className="text-xs">Chicago, IL · Designed with care.</p>
      </div>
    </footer>
  )
}
