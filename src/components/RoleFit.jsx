import { BarChart3, PieChart, Target, Brain, Sparkles, Database, ArrowUpRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Spotlight from './Spotlight'
import { useReveal } from '../hooks/useReveal'
import { roleFit } from '../data/content'

const iconMap = {
  BarChart3,
  PieChart,
  Target,
  Brain,
  Sparkles,
  Database,
}

export default function RoleFit() {
  return (
    <section id="roles" className="border-t border-ink-900/10 dark:border-white/10">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={7}
          eyebrow="Where I Fit Best"
          title="The roles where my stack lands cleanly."
          description="If you're hiring for one of these, here's the short version of what I bring — mapped to real, shipped work."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roleFit.map((r, i) => (
            <RoleCard key={r.role} role={r} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function RoleCard({ role, delay }) {
  const ref = useReveal()
  const Icon = iconMap[role.icon] || Target
  return (
    <Spotlight
      as="article"
      ref={ref}
      className="reveal card card-hover flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
          <Icon size={18} />
        </span>
        <h3 className="font-display text-xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100">
          {role.role}
        </h3>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:text-[15px]">
        {role.pitch}
      </p>

      <div className="mt-5 border-t border-ink-900/10 pt-4 dark:border-white/10">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-accent dark:text-accent-glow">
          Proof points
        </p>
        <ul className="mt-2 space-y-1.5">
          {role.proof.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-ink-700 dark:text-ink-200">
              <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-accent dark:bg-accent-glow" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 hover:text-accent dark:text-ink-100 dark:hover:text-accent-glow"
      >
        Hiring for this? Let's talk <ArrowUpRight size={14} />
      </a>
    </Spotlight>
  )
}
