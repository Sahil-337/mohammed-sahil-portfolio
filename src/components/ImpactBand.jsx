import { useCountUp } from '../hooks/useCountUp'
import { useReveal } from '../hooks/useReveal'
import { impactStats } from '../data/content'

export default function ImpactBand() {
  const ref = useReveal()
  return (
    <section
      ref={ref}
      className="reveal relative overflow-hidden border-y border-ink-900/10 bg-white dark:border-white/10 dark:bg-night-800/40"
    >
      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Impact at a glance</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tightish text-ink-900 dark:text-ink-100 md:text-4xl">
              The numbers behind the work.
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-600 dark:text-ink-300">
            Selected metrics from shipped projects across AI/ML evaluation, BI, and research analytics.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {impactStats.map((s, i) => (
            <ImpactCell key={i} stat={s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactCell({ stat, delay }) {
  // Parse the leading number (handles 50+, ~20%, 5,000+, 85%, 2,500+)
  const match = stat.number.match(/[\d,.]+/)
  const numeric = match ? parseFloat(match[0].replace(/,/g, '')) : null
  const prefix = match ? stat.number.slice(0, match.index) : ''
  const suffix = match ? stat.number.slice(match.index + match[0].length) : stat.number
  const decimals = match && match[0].includes('.') ? 1 : 0
  const [ref, displayed] = useCountUp(numeric || 0, { duration: 1500, decimals })

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-ink-900/10 bg-paper p-6 transition hover:border-accent/40 dark:border-white/10 dark:bg-night-900/40 dark:hover:border-accent-glow/40"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Decorative number pulse on hover */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition group-hover:bg-accent/15 dark:group-hover:bg-accent-glow/15" />

      <p className="font-display text-5xl font-semibold tracking-tighter2 text-ink-900 dark:text-ink-100 md:text-6xl">
        {numeric != null ? (
          <>
            <span>{prefix}</span>
            <span>
              {numeric % 1 === 0
                ? Math.round(parseFloat(displayed)).toLocaleString()
                : displayed}
            </span>
            <span className="gradient-text">{suffix}</span>
          </>
        ) : (
          <span className="gradient-text">{stat.number}</span>
        )}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:text-[15px]">
        {stat.label}
      </p>
    </div>
  )
}
