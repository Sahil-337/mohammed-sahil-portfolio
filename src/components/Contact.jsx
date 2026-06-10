import { useState } from 'react'
import { Mail, Linkedin, MapPin, Download, Github, Phone, Send, CheckCircle2 } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile } from '../data/content'
import { trackEvent, EVENTS } from '../lib/analytics'

// To activate the form: create a free form at https://formspree.io,
// then replace YOUR_FORM_ID below. Until then, submissions fall back
// to opening the visitor's email client pre-filled (always works).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
const FORM_CONFIGURED = !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-900/10 bg-white dark:border-white/10 dark:bg-night-800/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={9}
          eyebrow="Contact"
          title="Let's connect if you're hiring for data, analytics, AI, or BI roles."
          description="Based in Chicago, available across U.S. time zones. Send a message below — it goes straight to my inbox — or reach out directly."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: contact channels */}
          <div className="space-y-4">
            <ContactCard
              icon={<Mail size={18} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
              event={EVENTS.EMAIL_CLICK}
            />
            <ContactCard
              icon={<Phone size={18} />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              event={EVENTS.PHONE_CLICK}
            />
            <ContactCard
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              value="/in/mohammed-sahil-d2d15"
              href={profile.linkedin}
              event={EVENTS.LINKEDIN_CLICK}
            />
            <ContactCard
              icon={<Github size={18} />}
              label="GitHub"
              value="/Sahil-337"
              href={profile.github}
              event={EVENTS.GITHUB_CLICK}
            />
            <ContactCard
              icon={<MapPin size={18} />}
              label="Location"
              value={profile.location}
              href={null}
            />

            <a
              href={profile.resumePath}
              download
              onClick={() => trackEvent(EVENTS.RESUME_DOWNLOAD, { source: 'contact' })}
              className="btn-primary mt-2 w-full justify-center"
            >
              <Download size={16} /> Download Resume (PDF)
            </a>
          </div>

          {/* Right: message form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, event }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border border-ink-900/10 bg-paper p-4 transition hover:border-accent/40 dark:border-white/10 dark:bg-night-800 dark:hover:border-accent-glow/40">
      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-ink-900 dark:text-ink-100">{value}</p>
      </div>
    </div>
  )

  if (!href) return inner
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onClick={() => event && trackEvent(event)}
      className="block"
    >
      {inner}
    </a>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    trackEvent(EVENTS.CONTACT_FORM_SUBMIT)

    if (FORM_CONFIGURED) {
      setStatus('sending')
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        setStatus(res.ok ? 'sent' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      // Fallback: open the visitor's mail client pre-filled
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}${form.company ? `\n${form.company}` : ''}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('sent')
    }
  }

  if (status === 'sent') {
    return (
      <div className="card flex flex-col items-center justify-center gap-3 py-16 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
          <CheckCircle2 size={28} />
        </span>
        <p className="font-display text-2xl font-semibold tracking-tightish text-ink-900 dark:text-ink-100">
          Message on its way.
        </p>
        <p className="max-w-sm text-sm text-ink-600 dark:text-ink-300">
          Thanks for reaching out — I typically respond within 24 hours.
        </p>
        <button
          onClick={() => {
            setForm({ name: '', email: '', company: '', message: '' })
            setStatus('idle')
          }}
          className="btn-secondary mt-2"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="card space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-300">
        Send a message
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name *">
          <input
            required
            value={form.name}
            onChange={set('name')}
            placeholder="Jane Recruiter"
            className="input-base"
          />
        </Field>
        <Field label="Your email *">
          <input
            required
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="jane@company.com"
            className="input-base"
          />
        </Field>
      </div>

      <Field label="Company (optional)">
        <input
          value={form.company}
          onChange={set('company')}
          placeholder="Acme Analytics"
          className="input-base"
        />
      </Field>

      <Field label="Message *">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set('message')}
          placeholder="We're hiring a Data Analyst and your profile looks like a fit…"
          className="input-base resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        <Send size={15} />
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-center text-xs text-rose-600 dark:text-rose-400">
          Something went wrong — email me directly at {profile.email}
        </p>
      )}
    </form>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-600 dark:text-ink-300">{label}</span>
      {children}
    </label>
  )
}
