import { Check } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { useReveal } from '../hooks/useReveal'
import { about } from '../data/content'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="border-t border-ink-900/10 bg-white dark:border-white/10 dark:bg-night-800/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader num={1} eyebrow="About" title="Where data, ML, and decisions meet." />

        <div ref={ref} className="reveal grid gap-12 md:grid-cols-5">
          <div className="space-y-5 md:col-span-3">
            {about.body.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ink-700 dark:text-ink-200 md:text-lg"
              >
                {p}
              </p>
            ))}

            {/* Fact strip */}
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {about.funFacts.map((f) => (
                <div
                  key={f.k}
                  className="rounded-xl border border-ink-900/10 bg-paper p-3 transition hover:border-accent/40 dark:border-white/10 dark:bg-night-900/50 dark:hover:border-accent-glow/40"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
                    {f.k}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-900 dark:text-ink-100">
                    {f.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="section-label mb-4">Quick highlights</p>
            <ul className="space-y-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm text-ink-700 dark:text-ink-200 md:text-base">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
