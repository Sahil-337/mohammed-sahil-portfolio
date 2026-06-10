import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Spotlight from './Spotlight'
import { dashboards } from '../data/content'
import {
  MiniBarChart,
  MiniLineChart,
  SentimentSplit,
  StatusPills,
  CompareBars,
  Donut,
  ProgressBar,
} from './Charts'

export default function Dashboards() {
  const [activeId, setActiveId] = useState(dashboards[0].id)
  const [expanded, setExpanded] = useState(false)
  const active = dashboards.find((d) => d.id === activeId)

  return (
    <section id="dashboards" className="border-t border-ink-900/10 dark:border-white/10">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={4}
          eyebrow="Interactive Analytics & Dashboard Work"
          title="Dashboards I've built — and how they think."
          description="Three working previews based on real project themes. Each shows the KPIs, visualizations, and analytical lens behind the work. Sample/anonymized data for portfolio display."
        />

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {dashboards.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setActiveId(d.id)
                setExpanded(false)
              }}
              className={`tab-btn ${activeId === d.id ? 'tab-btn-active' : ''}`}
              aria-pressed={activeId === d.id}
            >
              {shortTitle(d.title)}
            </button>
          ))}
        </div>

        <Spotlight className="card card-hover">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-accent dark:text-accent-glow">
                Dashboard preview
              </p>
              <h3 className="mt-1 font-display text-2xl tracking-tight text-ink-900 dark:text-ink-100 md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:text-[15px]">
                {active.subtitle}
              </p>
            </div>
            <span className="chip-accent">Portfolio Visualization</span>
          </div>

          {/* KPI tiles */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {active.kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50"
              >
                <p className="text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
                  {k.label}
                </p>
                <p className="mt-1 font-display text-2xl text-ink-900 dark:text-ink-100 md:text-3xl">
                  {k.value}
                </p>
              </div>
            ))}
          </div>

          {/* Chart area — varies per dashboard */}
          <div className="mt-6">
            <DashboardCharts kind={active.chartKind} />
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {active.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          {/* Expandable details */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 hover:text-accent dark:text-ink-100 dark:hover:text-accent-glow"
            aria-expanded={expanded}
          >
            {expanded ? 'Hide details' : 'What this dashboard shows'}
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expanded && (
            <div className="mt-4 space-y-3 border-t border-ink-900/10 pt-4 dark:border-white/10">
              <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200 md:text-[15px]">
                {active.description}
              </p>
              <ul className="space-y-1.5">
                {active.detail.map((d, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-700 dark:text-ink-200">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-accent dark:bg-accent-glow" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Spotlight>
      </div>
    </section>
  )
}

function shortTitle(t) {
  if (t.includes('Business Performance')) return 'Business Performance'
  if (t.includes('AI/ML Evaluation')) return 'AI/ML Evaluation'
  if (t.includes('Survey')) return 'Survey & Responsible AI'
  return t
}

function DashboardCharts({ kind }) {
  if (kind === 'business') {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50">
          <MiniBarChart
            label="Visitor segments — monthly volume"
            data={[58, 82, 65, 92, 78, 110, 96, 124, 102, 130]}
            height={70}
          />
        </div>
        <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50">
          <MiniLineChart
            label="Weekly engagement trend"
            data={[24, 28, 32, 30, 38, 42, 40, 48, 54, 52, 60, 66]}
            height={70}
          />
        </div>
        <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50 md:col-span-2">
          <SentimentSplit pos={62} neu={26} neg={12} />
        </div>
      </div>
    )
  }

  if (kind === 'mleval') {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50">
          <CompareBars />
        </div>
        <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50">
          <StatusPills
            items={[
              { label: 'Module A', status: 'pass' },
              { label: 'Module B', status: 'watch' },
              { label: 'Module C', status: 'pass' },
              { label: 'Cross-modal', status: 'pass' },
            ]}
          />
          <div className="mt-4 space-y-3">
            <ProgressBar label="Cross-modal consistency" value={84} />
            <ProgressBar label="Validation coverage" value={78} />
            <ProgressBar label="Documentation completeness" value={72} />
          </div>
        </div>
        <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50 md:col-span-2">
          <MiniLineChart
            label="Performance trend across iteration cycles"
            data={[52, 55, 58, 56, 62, 65, 68, 72, 75, 78, 80, 84]}
            height={70}
          />
        </div>
      </div>
    )
  }

  // survey
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
          Survey response distribution
        </p>
        <Donut />
      </div>
      <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50">
        <MiniLineChart
          label="Engagement across survey waves"
          data={[18, 22, 28, 26, 32, 38, 36, 42, 40, 46]}
          height={70}
        />
      </div>
      <div className="rounded-xl border border-ink-900/10 bg-paper p-4 dark:border-white/10 dark:bg-night-900/50 md:col-span-2">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
          Responsible AI checklist
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { label: 'Bias review documented', value: 90 },
            { label: 'Consent & data handling', value: 85 },
            { label: 'Human-in-the-loop oversight', value: 78 },
            { label: 'Escalation pathways defined', value: 82 },
          ].map((p) => (
            <ProgressBar key={p.label} label={p.label} value={p.value} />
          ))}
        </div>
      </div>
    </div>
  )
}
