import { ExternalLink, Award, Sparkles, GraduationCap } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Spotlight from './Spotlight'
import { useReveal } from '../hooks/useReveal'
import { leadership } from '../data/content'

const icons = [Award, Sparkles, GraduationCap]

export default function Leadership() {
  return (
    <section id="leadership" className="border-t border-ink-900/10 bg-white dark:border-white/10 dark:bg-night-800/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={5}
          eyebrow="Leadership, Fellowships & Community Impact"
          title="Beyond the resume."
          description="Public-facing leadership, responsible-AI research, and academic recognition."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {leadership.map((item, i) => (
            <LeadershipCard key={item.title} item={item} icon={icons[i] || Award} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LeadershipCard({ item, icon: Icon, delay }) {
  const ref = useReveal()
  return (
    <Spotlight
      as="article"
      ref={ref}
      className="reveal card card-hover flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
        <Icon size={20} />
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:text-[15px]">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {item.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-900/10 pt-4 dark:border-white/10">
          {item.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 bg-white px-3 py-1.5 text-xs font-medium text-ink-800 transition hover:border-accent hover:text-accent dark:border-white/15 dark:bg-night-700 dark:text-ink-100 dark:hover:border-accent-glow dark:hover:text-accent-glow"
            >
              {l.label} <ExternalLink size={12} />
            </a>
          ))}
        </div>
      )}
    </Spotlight>
  )
}
