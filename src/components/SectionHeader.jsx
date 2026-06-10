export default function SectionHeader({ eyebrow, title, description, num }) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="flex items-baseline gap-3">
        {num && (
          <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
            {num.toString().padStart(2, '0')} /
          </span>
        )}
        <p className="section-label">{eyebrow}</p>
      </div>
      <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink-900 dark:text-ink-100 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
