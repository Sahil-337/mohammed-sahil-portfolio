import { useState } from 'react'
import { ArrowUpRight, Download, Mail, BarChart3, MapPin, Github, Linkedin } from 'lucide-react'
import { hero, profile } from '../data/content'
import { MiniBarChart, MiniLineChart, ProgressBar } from './Charts'
import TypeRotator from './TypeRotator'
import Spotlight from './Spotlight'
import NeuralParticles from './NeuralParticles'
import { useCountUp } from '../hooks/useCountUp'
import { trackEvent, EVENTS } from '../lib/analytics'

const rotatingRoles = [
  'AI evaluation systems.',
  'RAG & LLM pipelines.',
  'NLP & ML models.',
  'KPI dashboards.',
  'decision-ready insights.',
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* Aurora gradient blobs */}
      <div className="aurora" aria-hidden="true" />
      <div className="aurora-2" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hero-grid" aria-hidden="true" />
      {/* Neural network particles — subtle data-science ornament */}
      <NeuralParticles className="absolute inset-0 -z-[5] h-full w-full text-accent/40 opacity-50 dark:text-accent-glow/50" />

      <div className="mx-auto max-w-content px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 animate-fade-up">
              <span className="inline-flex h-2 w-2 animate-pulse-soft rounded-full bg-accent dark:bg-accent-glow" aria-hidden="true" />
              <p className="section-label">{hero.eyebrow}</p>
            </div>

            {/* Mobile profile row */}
            <div className="mt-6 flex items-center gap-4 lg:hidden">
              <ProfileAvatar imgError={imgError} setImgError={setImgError} size={88} />
              <div>
                <p className="font-display text-2xl tracking-tightish text-ink-900 dark:text-ink-100">
                  {profile.name}
                </p>
                <p className="inline-flex items-center gap-1 text-xs text-ink-500 dark:text-ink-300">
                  <MapPin size={12} /> {profile.location}
                </p>
              </div>
            </div>

            <h1 className="mt-7 font-display font-semibold tracking-tighter2 text-ink-900 dark:text-ink-100 animate-fade-up text-[42px] leading-[1.04] md:text-[68px] md:leading-[1.02] lg:text-[76px]">
              <span className="block">Data Scientist building</span>
              <span className="block min-h-[1.05em]">
                <TypeRotator words={rotatingRoles} />
              </span>
            </h1>

            {/* "Now" status pill */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-medium text-accent dark:border-accent-glow/25 dark:bg-accent-glow/10 dark:text-accent-glow animate-fade-up">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
              </span>
              <span className="uppercase tracking-wider">Now</span>
              <span className="text-ink-700 dark:text-ink-200">
                Building AI evaluation & validation frameworks at an AI startup
              </span>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300 md:text-lg animate-fade-up">
              {hero.subheadline}
            </p>

            {/* LinkedIn-mirror tagline */}
            <div className="mt-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-500 dark:text-ink-300 animate-fade-up">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Headline</span>
              <Sep />
              <span>Machine Learning &amp; NLP</span>
              <Sep />
              <span>AI Systems Validation</span>
              <Sep />
              <span>Product Analytics</span>
              <Sep />
              <span className="font-mono">Python · SQL · XGBoost</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="#dashboards" className="btn-secondary">
                <BarChart3 size={16} /> View Dashboards
              </a>
              <a
                href={profile.resumePath}
                download
                onClick={() => trackEvent(EVENTS.RESUME_DOWNLOAD, { source: 'hero' })}
                className="btn-secondary"
              >
                <Download size={16} /> Resume
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={16} /> GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary">
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {hero.badges.map((b, i) => (
                <span
                  key={b}
                  className="chip animate-fade-up"
                  style={{ animationDelay: `${500 + i * 35}ms` }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <div className="hidden flex-col items-center gap-6 lg:flex">
              <ProfileAvatar imgError={imgError} setImgError={setImgError} size={200} />
              <div className="text-center">
                <p className="font-display text-3xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100">
                  {profile.name}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink-500 dark:text-ink-300">
                  <MapPin size={12} /> {profile.location}
                </p>
              </div>
            </div>

            <SnapshotCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function Sep() {
  return <span className="text-ink-300 dark:text-ink-500" aria-hidden="true">·</span>
}

function ProfileAvatar({ imgError, setImgError, size = 200 }) {
  const dim = { width: size, height: size }
  return (
    <div
      className="group relative flex flex-none items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent/15 to-accent-glow/10 transition-transform duration-500 hover:scale-[1.02]"
      style={dim}
    >
      {/* Gradient ring */}
      <div
        className="absolute inset-0 rounded-full p-[3px]"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, #0B6E4F 0deg, #10B981 120deg, #34D399 240deg, #0B6E4F 360deg)',
        }}
        aria-hidden="true"
      >
        <div className="h-full w-full rounded-full bg-paper dark:bg-night-900" />
      </div>

      <div className="absolute inset-[3px] overflow-hidden rounded-full">
        {!imgError ? (
          <img
            src={profile.imagePath}
            alt={profile.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 to-accent-glow/10">
            <span
              className="font-display font-semibold tracking-tightish text-accent dark:text-accent-glow"
              style={{ fontSize: size * 0.42 }}
            >
              {profile.initials}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function KpiTile({ label, raw }) {
  const match = raw.match(/[\d,]+/)
  const numeric = match ? parseInt(match[0].replace(/,/g, ''), 10) : null
  const prefix = match ? raw.slice(0, match.index) : ''
  const suffix = match ? raw.slice(match.index + match[0].length) : ''
  const [ref, displayed] = useCountUp(numeric || 0, { duration: 1500 })

  return (
    <div
      ref={ref}
      className="rounded-xl border border-ink-900/10 bg-paper p-3 dark:border-white/10 dark:bg-night-900/50"
    >
      <p className="text-[10px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
        {label}
      </p>
      <p className="mt-1 font-display text-2xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100">
        {numeric != null ? (
          <>
            <span>{prefix}</span>
            {displayed}
            <span className="text-accent dark:text-accent-glow">{suffix}</span>
          </>
        ) : (
          raw
        )}
      </p>
    </div>
  )
}

function SnapshotCard() {
  return (
    <Spotlight className="mt-8 card card-hover lg:mt-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">
          {hero.snapshot.label}
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
          <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-soft" />
          From Resume
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {hero.snapshot.kpis.map((k) => (
          <KpiTile key={k.label} label={k.label} raw={k.value} />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-ink-900/10 bg-paper p-3 dark:border-white/10 dark:bg-night-900/50">
          <MiniBarChart label="Cycle Throughput" />
        </div>
        <div className="rounded-xl border border-ink-900/10 bg-paper p-3 dark:border-white/10 dark:bg-night-900/50">
          <MiniLineChart label="Engagement Trend" />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <ProgressBar label="Reporting Accuracy (WNDR)" value={88} />
        <ProgressBar label="Cross-modal Consistency Lift" value={20} />
        <ProgressBar label="Validation Coverage" value={82} />
      </div>
    </Spotlight>
  )
}
