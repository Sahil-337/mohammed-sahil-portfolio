import { Trophy, Award, GraduationCap, Sparkles, BookOpen, Star, HeartHandshake, ExternalLink, Check, Loader2, Target } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Spotlight from './Spotlight'
import { useReveal } from '../hooks/useReveal'
import { achievements, certifications, education, volunteer } from '../data/content'

const kindIcon = {
  Degree: GraduationCap,
  Scholarship: Star,
  Award: Trophy,
  Leadership: Sparkles,
  Fellowship: Sparkles,
  Academic: BookOpen,
  Certification: Award,
}

const kindTone = {
  Degree: 'from-accent/15 to-accent/5 text-accent dark:from-accent-glow/20 dark:to-accent-glow/5 dark:text-accent-glow',
  Scholarship: 'from-amber-500/15 to-amber-500/5 text-amber-600',
  Award: 'from-violet-500/15 to-violet-500/5 text-violet-600 dark:text-violet-400',
  Leadership: 'from-rose-500/15 to-rose-500/5 text-rose-600 dark:text-rose-400',
  Fellowship: 'from-sky-500/15 to-sky-500/5 text-sky-600 dark:text-sky-400',
  Academic: 'from-blue-500/15 to-blue-500/5 text-blue-600 dark:text-blue-400',
  Certification: 'from-emerald-500/15 to-emerald-500/5 text-emerald-600 dark:text-emerald-400',
}

const statusConfig = {
  earned: {
    label: 'Earned',
    icon: Check,
    classes: 'bg-accent/10 text-accent border-accent/25 dark:bg-accent-glow/15 dark:text-accent-glow dark:border-accent-glow/30',
  },
  'in-progress': {
    label: 'In progress',
    icon: Loader2,
    classes: 'bg-amber-500/10 text-amber-600 border-amber-500/25 dark:text-amber-400',
    spin: true,
  },
  planned: {
    label: 'Planned',
    icon: Target,
    classes: 'bg-ink-900/5 text-ink-600 border-ink-900/15 dark:bg-white/5 dark:text-ink-300 dark:border-white/15',
  },
}

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-ink-900/10 dark:border-white/10">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={6}
          eyebrow="Achievements & Recognition"
          title="Awards, fellowships, certifications, and service."
          description="Academic, professional, and community recognition across two countries and multiple programs."
        />

        {/* Awards & honors */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <AchievementCard key={a.name} a={a} delay={i * 50} />
          ))}
        </div>

        {/* Certifications — separated into earned vs in-progress visually */}
        <div className="mt-14">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <p className="section-label">Certifications</p>
            <p className="text-xs text-ink-500 dark:text-ink-300">
              <span className="font-mono font-semibold text-ink-700 dark:text-ink-200">
                {certifications.filter((c) => c.status === 'earned').length}
              </span>
              {' '}earned ·{' '}
              <span className="font-mono font-semibold text-amber-600">
                {certifications.filter((c) => c.status === 'in-progress').length}
              </span>
              {' '}in progress ·{' '}
              <span className="font-mono font-semibold text-ink-500 dark:text-ink-400">
                {certifications.filter((c) => c.status === 'planned').length}
              </span>
              {' '}planned
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <CertCard key={c.name} c={c} delay={i * 50} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-14">
          <p className="section-label mb-4">Education</p>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((e, i) => (
              <EducationCard key={e.school} e={e} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* Volunteer */}
        <div className="mt-14">
          <p className="section-label mb-4">Volunteer Experience</p>
          <div className="grid gap-3 md:grid-cols-2">
            {volunteer.map((v, i) => (
              <VolunteerCard key={v.role + v.date} v={v} delay={i * 50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ a, delay }) {
  const ref = useReveal()
  const Icon = kindIcon[a.kind] || Trophy
  const tone = kindTone[a.kind] || kindTone.Award
  return (
    <div
      ref={ref}
      className="reveal card card-hover flex items-start gap-3 p-4"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${tone}`}>
        <Icon size={18} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink-900 dark:text-ink-100">{a.name}</p>
        <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-300">{a.org}</p>
        <span className="mt-2 inline-block rounded-md bg-ink-900/5 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600 dark:bg-white/10 dark:text-ink-200">
          {a.kind}
        </span>
      </div>
    </div>
  )
}

function CertCard({ c, delay }) {
  const ref = useReveal()
  const cfg = statusConfig[c.status] || statusConfig.earned
  const StatusIcon = cfg.icon
  return (
    <Spotlight
      as="div"
      ref={ref}
      className="reveal flex flex-col gap-3 rounded-xl border border-ink-900/10 bg-paper p-4 transition hover:border-accent/40 dark:border-white/10 dark:bg-night-800 dark:hover:border-accent-glow/40"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
          <Award size={16} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink-900 dark:text-ink-100">{c.name}</p>
          <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-300">{c.issuer}</p>
        </div>
        <span
          className={`inline-flex flex-none items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${cfg.classes}`}
        >
          <StatusIcon size={10} className={cfg.spin ? 'animate-spin' : ''} />
          {cfg.label}
        </span>
      </div>

      {c.note && (
        <p className="text-xs leading-relaxed text-ink-600 dark:text-ink-300">
          {c.note}
        </p>
      )}

      <div className="mt-auto">
        <p className="font-mono text-[11px] text-ink-500 dark:text-ink-300">{c.date}</p>
      </div>
    </Spotlight>
  )
}

function EducationCard({ e, delay }) {
  const ref = useReveal()
  return (
    <Spotlight
      as="div"
      ref={ref}
      className="reveal card card-hover"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
          <GraduationCap size={18} />
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-ink-900 dark:text-ink-100">{e.school}</p>
              <p className="text-xs text-ink-500 dark:text-ink-300">{e.location}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-ink-700 dark:text-ink-200">{e.date}</p>
              <p className="text-[10px] text-ink-500 dark:text-ink-300">GPA: {e.gpa}</p>
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-accent dark:text-accent-glow">{e.degree}</p>
          <p className="mt-2 text-xs text-ink-600 dark:text-ink-300">
            <span className="font-medium">Coursework: </span>
            {e.coursework}
          </p>
          {e.verifyLink && (
            <a
              href={e.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline dark:text-accent-glow"
            >
              Verify on Parchment <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </Spotlight>
  )
}

function VolunteerCard({ v, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex items-start gap-3 rounded-xl border border-ink-900/10 bg-paper p-4 transition hover:border-accent/40 dark:border-white/10 dark:bg-night-800 dark:hover:border-accent-glow/40"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400">
        <HeartHandshake size={16} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink-900 dark:text-ink-100">{v.role}</p>
        <p className="mt-0.5 text-xs text-ink-600 dark:text-ink-300">{v.org}</p>
        <p className="mt-1 font-mono text-[11px] text-ink-500 dark:text-ink-300">{v.date}</p>
      </div>
    </div>
  )
}
