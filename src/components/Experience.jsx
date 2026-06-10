import { MapPin } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Spotlight from './Spotlight'
import { useReveal } from '../hooks/useReveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-900/10 dark:border-white/10">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={2}
          eyebrow="Work Experience"
          title="Where I've done the work."
          description="Startup, institutional, and customer-facing environments — with a consistent thread of analytics, ML evaluation, and stakeholder reporting."
        />

        <ol className="relative space-y-6 border-l border-ink-900/15 pl-6 dark:border-white/15 md:pl-8">
          {experience.map((role, i) => (
            <RoleItem key={role.title + role.company} role={role} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function RoleItem({ role, index }) {
  const ref = useReveal()
  return (
    <li ref={ref} className="reveal relative" style={{ transitionDelay: `${index * 80}ms` }}>
      <span
        className="absolute -left-[31px] top-3 h-3 w-3 rounded-full border-2 border-paper bg-accent dark:border-night-900 dark:bg-accent-glow md:-left-[35px]"
        aria-hidden="true"
      />
      <Spotlight className="card card-hover">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100 md:text-2xl">
              {role.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent dark:text-accent-glow">
              {role.company}
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-ink-700 dark:text-ink-200">{role.period}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink-500 dark:text-ink-300">
              <MapPin size={12} /> {role.location}
            </p>
          </div>
        </div>

        {/* Metric pills (right under header) */}
        {role.metrics && role.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {role.metrics.map((m, i) => (
              <div
                key={i}
                className="inline-flex items-baseline gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 dark:border-accent-glow/25 dark:bg-accent-glow/10"
              >
                <span className="font-display text-sm font-semibold text-accent dark:text-accent-glow">
                  {m.v}
                </span>
                <span className="text-[11px] text-ink-600 dark:text-ink-300">{m.l}</span>
              </div>
            ))}
          </div>
        )}

        <ul className="mt-5 space-y-2.5">
          {role.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-ink-200 md:text-[15px]"
            >
              <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-ink-400 dark:bg-ink-300" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {role.skills.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </Spotlight>
    </li>
  )
}
