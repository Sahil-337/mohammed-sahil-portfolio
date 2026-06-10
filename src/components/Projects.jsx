import { useState, useMemo, useEffect } from 'react'
import { ChevronDown, ChevronUp, Github, ExternalLink, ArrowUpRight, Star } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Spotlight from './Spotlight'
import { useReveal } from '../hooks/useReveal'
import { projects, projectCategories } from '../data/content'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [openId, setOpenId] = useState(null)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setAnimKey((k) => k + 1)
  }, [filter])

  const filtered = useMemo(() => {
    const list = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))
    return list.slice().sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  }, [filter])

  return (
    <section id="projects" className="border-t border-ink-900/10 bg-white dark:border-white/10 dark:bg-night-800/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={3}
          eyebrow="Featured Projects"
          title="Selected work — research, ML, and dashboards."
          description="Filter by area to see how AI/ML, BI, analytics, research, and community work show up across projects. Featured projects are pinned first."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`tab-btn ${filter === c ? 'tab-btn-active' : ''}`}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div key={animKey} className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              open={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              animDelay={i * 70}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-ink-500 dark:text-ink-300">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, open, onToggle, animDelay }) {
  const ref = useReveal()
  return (
    <Spotlight
      as="article"
      ref={ref}
      className="reveal card card-hover flex flex-col"
      style={{ transitionDelay: `${animDelay}ms` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100 md:text-2xl">
          {project.title}
        </h3>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
              <Star size={10} /> Featured
            </span>
          )}
          {project.categories.map((c) => (
            <span key={c} className="chip-accent">{c}</span>
          ))}
        </div>
      </div>

      {project.period && (
        <p className="mt-1 font-mono text-xs text-ink-500 dark:text-ink-300">{project.period}</p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:text-[15px]">
        {project.description}
      </p>

      {/* Highlight stats — big editorial numbers */}
      {project.highlightStats && project.highlightStats.length > 0 && (
        <div className="mt-5 grid gap-3" style={{ gridTemplateColumns: `repeat(${project.highlightStats.length}, minmax(0, 1fr))` }}>
          {project.highlightStats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-ink-900/10 bg-paper/60 p-3 text-center dark:border-white/10 dark:bg-night-900/40"
            >
              <p className="font-display text-2xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100 md:text-3xl">
                <span className="gradient-text">{s.v}</span>
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      )}

      {project.impact && (
        <p className="mt-4 text-sm text-ink-700 dark:text-ink-200">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent dark:text-accent-glow">Impact &nbsp;·&nbsp; </span>
          {project.impact}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tools.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 hover:text-accent dark:text-ink-100 dark:hover:text-accent-glow"
          aria-expanded={open}
        >
          {open ? 'Hide details' : 'View details'}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent dark:text-ink-200 dark:hover:text-accent-glow"
          >
            <Github size={14} /> GitHub <ArrowUpRight size={12} />
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent dark:text-ink-200 dark:hover:text-accent-glow"
          >
            <ExternalLink size={14} /> Visit <ArrowUpRight size={12} />
          </a>
        )}
        {project.dashboardId && (
          <a
            href="#dashboards"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline dark:text-accent-glow"
          >
            View related dashboard <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {open && (
        <ul className="mt-5 space-y-2 border-t border-ink-900/10 pt-5 dark:border-white/10">
          {project.details.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-700 dark:text-ink-200">
              <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-accent dark:bg-accent-glow" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}
    </Spotlight>
  )
}
