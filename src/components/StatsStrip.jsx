import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { statsStrip } from '../data/content'

export default function StatsStrip() {
  return (
    <section className="border-y border-ink-900/10 bg-ink-900 text-paper dark:border-white/10 dark:bg-night-800">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {statsStrip.map((s, i) => (
            <Stat key={i} stat={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ stat, delay }) {
  const revealRef = useReveal()
  const match = stat.v.match(/[\d,.]+/)
  const numeric = match ? parseFloat(match[0].replace(/,/g, '')) : null
  const prefix = match ? stat.v.slice(0, match.index) : ''
  const suffix = match ? stat.v.slice(match.index + match[0].length) : stat.v
  const [countRef, displayed] = useCountUp(numeric || 0, { duration: 1400 })

  // Merge both refs onto the same div
  const setRefs = (el) => {
    revealRef.current = el
    countRef.current = el
  }

  return (
    <div
      ref={setRefs}
      className="reveal text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-display text-3xl font-semibold tracking-tightish md:text-4xl">
        {numeric != null ? (
          <>
            <span>{prefix}</span>
            <span>
              {numeric % 1 === 0
                ? Math.round(parseFloat(displayed)).toLocaleString()
                : displayed}
            </span>
            <span className="text-accent-glow">{suffix}</span>
          </>
        ) : (
          <span className="text-accent-glow">{stat.v}</span>
        )}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wider text-ink-300">
        {stat.l}
      </p>
    </div>
  )
}
