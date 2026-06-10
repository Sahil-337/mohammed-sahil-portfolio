// All charts are pure SVG. No dependencies. Mock data labeled clearly.

export function MiniBarChart({ data = [42, 64, 51, 78, 60, 88, 72], color = '#0B6E4F', height = 60, label }) {
  const max = Math.max(...data, 1)
  return (
    <div>
      {label && <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">{label}</p>}
      <svg viewBox={`0 0 ${data.length * 14} ${height}`} className="w-full" preserveAspectRatio="none" aria-hidden="true">
        {data.map((v, i) => {
          const h = (v / max) * (height - 6)
          return (
            <rect
              key={i}
              x={i * 14 + 2}
              y={height - h}
              width={10}
              height={h}
              rx={2}
              fill={color}
              opacity={0.35 + (i % 3) * 0.22}
            />
          )
        })}
      </svg>
    </div>
  )
}

export function MiniLineChart({
  data = [12, 18, 14, 22, 28, 24, 32, 30, 36, 42, 38, 48],
  color = '#0B6E4F',
  height = 60,
  label,
  area = true,
}) {
  const w = 220
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = Math.max(max - min, 1)
  const step = w / (data.length - 1)
  const points = data.map((v, i) => {
    const x = i * step
    const y = height - 4 - ((v - min) / range) * (height - 12)
    return [x, y]
  })
  const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const areaPath = `${path} L${w},${height} L0,${height} Z`

  return (
    <div>
      {label && <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">{label}</p>}
      <svg viewBox={`0 0 ${w} ${height}`} className="w-full" preserveAspectRatio="none" aria-hidden="true">
        {area && <path d={areaPath} fill={color} fillOpacity="0.12" />}
        <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {points.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === points.length - 1 ? 3 : 0}
            fill={color}
          />
        ))}
      </svg>
    </div>
  )
}

export function ProgressBar({ label, value, color = '#0B6E4F' }) {
  const safe = Math.max(0, Math.min(100, value))
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-medium text-ink-700 dark:text-ink-200">{label}</span>
        <span className="font-mono text-ink-500 dark:text-ink-300">{safe}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-ink-900/10 dark:bg-white/10">
        <div
          className="h-full rounded-full"
          style={{ width: `${safe}%`, background: color }}
        />
      </div>
    </div>
  )
}

export function SentimentSplit({ pos = 62, neu = 26, neg = 12 }) {
  const total = pos + neu + neg
  const p = (pos / total) * 100
  const n = (neu / total) * 100
  const ng = (neg / total) * 100
  return (
    <div>
      <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
        Sentiment split
      </p>
      <div className="flex h-3 overflow-hidden rounded-full">
        <div style={{ width: `${p}%`, background: '#0B6E4F' }} />
        <div style={{ width: `${n}%`, background: '#9CA3AF' }} />
        <div style={{ width: `${ng}%`, background: '#DC2626' }} />
      </div>
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-ink-600 dark:text-ink-300">
        <Legend dot="#0B6E4F" label={`Positive · ${pos}%`} />
        <Legend dot="#9CA3AF" label={`Neutral · ${neu}%`} />
        <Legend dot="#DC2626" label={`Negative · ${neg}%`} />
      </div>
    </div>
  )
}

function Legend({ dot, label }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-block h-2 w-2 rounded-full" style={{ background: dot }} />
      {label}
    </span>
  )
}

// Status indicator pills (pass / watch / fail)
export function StatusPills({ items = [
  { label: 'Module A', status: 'pass' },
  { label: 'Module B', status: 'watch' },
  { label: 'Module C', status: 'pass' },
] }) {
  const tone = {
    pass: 'bg-accent/10 text-accent border-accent/20',
    watch: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    fail: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
  }
  return (
    <div>
      <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
        Validation status
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it.label}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${tone[it.status]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {it.label}
          </span>
        ))}
      </div>
    </div>
  )
}

// Comparison bars (model A vs B vs C)
export function CompareBars({ groups = [
  { label: 'Iter 1', a: 62, b: 58, c: 51 },
  { label: 'Iter 2', a: 70, b: 66, c: 60 },
  { label: 'Iter 3', a: 78, b: 74, c: 70 },
  { label: 'Iter 4', a: 84, b: 80, c: 76 },
] }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
        Module comparison
      </p>
      <div className="space-y-2">
        {groups.map((g) => (
          <div key={g.label} className="flex items-center gap-2">
            <span className="w-12 font-mono text-[10px] text-ink-500 dark:text-ink-300">{g.label}</span>
            <div className="flex-1 space-y-1">
              <Bar value={g.a} color="#0B6E4F" />
              <Bar value={g.b} color="#10B981" opacity={0.7} />
              <Bar value={g.c} color="#9CA3AF" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
function Bar({ value, color, opacity = 1 }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-ink-900/5 dark:bg-white/5">
      <div className="h-full rounded-full" style={{ width: `${value}%`, background: color, opacity }} />
    </div>
  )
}

// Donut for survey distribution
export function Donut({ segments = [
  { label: 'Positive', value: 42, color: '#0B6E4F' },
  { label: 'Neutral', value: 33, color: '#9CA3AF' },
  { label: 'Concern', value: 25, color: '#F59E0B' },
] }) {
  const total = segments.reduce((s, x) => s + x.value, 0)
  const r = 36
  const c = 2 * Math.PI * r
  let offset = 0
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="h-24 w-24" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="10" />
        {segments.map((s, i) => {
          const len = (s.value / total) * c
          const dasharray = `${len} ${c - len}`
          const dashoffset = -offset
          offset += len
          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="10"
              strokeDasharray={dasharray}
              strokeDashoffset={dashoffset}
              transform="rotate(-90 50 50)"
              strokeLinecap="butt"
            />
          )
        })}
      </svg>
      <ul className="space-y-1 text-xs">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-ink-700 dark:text-ink-200">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: s.color }} />
            <span>{s.label}</span>
            <span className="font-mono text-ink-500 dark:text-ink-300">{Math.round((s.value / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
