import { useMemo, useState, useEffect } from 'react'
import { Search, Sparkles, Code2, Briefcase, Users, Layers } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { skillStack, skillCategoryFilters, coreStack } from '../data/content'

const strengthOrder = { Core: 0, Strong: 1, Working: 2, Familiar: 3 }
const strengthWidth = { Core: 100, Strong: 78, Working: 55, Familiar: 35 }

const kindIcons = {
  technical: Code2,
  business: Briefcase,
  soft: Users,
}
const filterToKind = {
  All: null,
  Technical: 'technical',
  Business: 'business',
  Soft: 'soft',
}

export default function Skills() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  // Bump key to retrigger animations on filter/query change
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setAnimKey((k) => k + 1)
  }, [filter, query])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const targetKind = filterToKind[filter]
    return skillStack
      .filter((cat) => !targetKind || cat.kind === targetKind)
      .map((cat) => ({
        ...cat,
        items: cat.items
          .filter((it) => !q || it.name.toLowerCase().includes(q))
          .slice()
          .sort((a, b) => strengthOrder[a.strength] - strengthOrder[b.strength]),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [filter, query])

  const totalSkills = useMemo(
    () => filtered.reduce((s, cat) => s + cat.items.length, 0),
    [filtered],
  )

  return (
    <section id="skills" className="border-t border-ink-900/10 bg-white dark:border-white/10 dark:bg-night-800/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={8}
          eyebrow="Skill Stack"
          title="Technical, business, and the way I work."
          description="Filter by area or search a tool. Strength labels reflect how I actually use these — Core is everyday, Familiar is supporting knowledge."
        />

        {/* Core stack callout */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-4 dark:border-accent-glow/20 dark:bg-accent-glow/5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-glow">
            <Sparkles size={14} /> Core stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {coreStack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-accent-glow dark:text-night-900"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {skillCategoryFilters.map((c) => {
              const isActive = filter === c
              const Icon =
                c === 'All' ? Layers : kindIcons[filterToKind[c]] || Layers
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    isActive
                      ? 'border border-transparent bg-ink-900 text-paper dark:bg-accent-glow dark:text-night-900'
                      : 'border border-ink-900/10 bg-white text-ink-700 hover:border-ink-900/25 dark:border-white/10 dark:bg-night-700 dark:text-ink-200 dark:hover:border-white/25'
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon size={12} /> {c}
                </button>
              )
            })}
          </div>
          <div className="relative md:w-72">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400 dark:text-ink-300"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a skill…"
              className="w-full rounded-full border border-ink-900/10 bg-white py-2 pl-9 pr-4 text-sm text-ink-800 placeholder:text-ink-400 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-night-700 dark:text-ink-100 dark:placeholder:text-ink-300"
              aria-label="Search skills"
            />
          </div>
        </div>

        {/* Result summary */}
        <p className="mb-4 text-xs text-ink-500 dark:text-ink-300">
          Showing <span className="font-mono font-semibold text-ink-700 dark:text-ink-100">{totalSkills}</span> skills across {filtered.length} {filtered.length === 1 ? 'category' : 'categories'}.
        </p>

        <div key={animKey} className="grid gap-6 md:grid-cols-2">
          {filtered.map((cat, idx) => {
            const Icon = kindIcons[cat.kind] || Layers
            return (
              <div
                key={cat.category}
                className="card card-hover animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms`, animationFillMode: 'backwards' }}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
                    <Icon size={16} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-ink-900 dark:text-ink-100">
                      {cat.category}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
                      {cat.context}
                    </p>
                  </div>
                  <span className="rounded-md bg-ink-900/5 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink-600 dark:bg-white/10 dark:text-ink-200">
                    {cat.items.length}
                  </span>
                </div>

                <ul className="mt-4 space-y-3">
                  {cat.items.map((item, i) => (
                    <li
                      key={item.name}
                      className="animate-fade-up"
                      style={{
                        animationDelay: `${idx * 60 + i * 35}ms`,
                        animationFillMode: 'backwards',
                      }}
                    >
                      <div className="mb-1.5 flex items-center justify-between gap-2 text-sm">
                        <span className="font-medium text-ink-800 dark:text-ink-100">
                          {item.name}
                        </span>
                        <span className={`strength strength-${item.strength}`}>
                          {item.strength}
                        </span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-ink-900/10 dark:bg-white/10">
                        <div
                          className="h-full rounded-full bg-accent dark:bg-accent-glow"
                          style={{
                            width: `${strengthWidth[item.strength]}%`,
                            transition: 'width 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                            transitionDelay: `${idx * 60 + i * 35}ms`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-ink-500 dark:text-ink-300">
            No skills match — try a different search or category.
          </p>
        )}
      </div>
    </section>
  )
}
