// SahilAI — client-side retrieval engine.
// Builds a knowledge base from the portfolio's single source of truth (content.js),
// scores chunks against the user's question, and synthesizes a grounded answer.
// Architecture mirrors a RAG pipeline: chunk -> retrieve -> rank -> synthesize.
// If /api/chat (serverless LLM) is deployed, the widget upgrades automatically.

import {
  profile,
  about,
  experience,
  projects,
  skillStack,
  education,
  certifications,
  leadership,
  roleFit,
  volunteer,
} from '../data/content'

// ─── Knowledge base construction ───────────────────────────────
function buildKnowledgeBase() {
  const chunks = []

  chunks.push({
    id: 'summary',
    topic: 'summary',
    keywords: ['who', 'about', 'background', 'summary', 'introduce', 'introduction', 'sahil', 'mohammed', 'yourself', 'overview', 'tell me'],
    text: about.body.join(' '),
    answer: () =>
      `${about.body[0]}\n\n${about.body[1]}`,
  })

  // Experience chunks
  experience.forEach((role) => {
    chunks.push({
      id: `exp-${role.company}`,
      topic: 'experience',
      keywords: [
        'experience', 'work', 'job', 'role', 'company', 'career', 'history',
        ...role.title.toLowerCase().split(/[\s/&]+/),
        ...role.company.toLowerCase().split(/[\s/()]+/),
        ...role.skills.map((s) => s.toLowerCase()),
      ],
      text: `${role.title} at ${role.company} (${role.period}): ${role.bullets.join(' ')}`,
      answer: () =>
        `**${role.title}** — ${role.company} (${role.period}, ${role.location})\n\n${role.bullets.map((b) => `• ${b}`).join('\n')}`,
    })
  })

  // Project chunks
  projects.forEach((p) => {
    chunks.push({
      id: `proj-${p.id}`,
      topic: 'project',
      keywords: [
        'project', 'built', 'build', 'portfolio',
        ...p.title.toLowerCase().split(/[\s—\-/&]+/),
        ...p.tools.map((t) => t.toLowerCase()),
        ...p.categories.map((c) => c.toLowerCase()),
      ],
      text: `${p.title}: ${p.description} Impact: ${p.impact}`,
      answer: () => {
        const links = []
        if (p.repo) links.push(`GitHub: ${p.repo}`)
        if (p.link) links.push(`Link: ${p.link}`)
        return `**${p.title}** (${p.period || 'recent'})\n\n${p.description}\n\n📊 Impact: ${p.impact}${links.length ? `\n\n${links.join('\n')}` : ''}`
      },
    })
  })

  // Skills chunks
  skillStack.forEach((cat) => {
    chunks.push({
      id: `skill-${cat.category}`,
      topic: 'skills',
      keywords: [
        'skill', 'skills', 'stack', 'tools', 'know', 'technologies', 'tech',
        ...cat.category.toLowerCase().split(/[\s&]+/),
        ...cat.items.map((i) => i.name.toLowerCase()),
      ],
      text: `${cat.category}: ${cat.items.map((i) => i.name).join(', ')}. ${cat.context}`,
      answer: () =>
        `**${cat.category}**\n${cat.context}\n\n${cat.items.map((i) => `• ${i.name} — ${i.strength}`).join('\n')}`,
    })
  })

  // Education
  education.forEach((e) => {
    chunks.push({
      id: `edu-${e.school}`,
      topic: 'education',
      keywords: ['education', 'degree', 'university', 'college', 'school', 'masters', 'bachelor', 'gpa', 'study', 'studied', 'graduate', 'illinois', 'tech', 'iit', 'vtu', 'amc'],
      text: `${e.degree} from ${e.school} (${e.date}), GPA ${e.gpa}. Coursework: ${e.coursework}`,
      answer: () =>
        `**${e.degree}**\n${e.school}, ${e.location} — ${e.date} (GPA ${e.gpa})\n\nCoursework: ${e.coursework}${e.verifyLink ? `\n\nVerified degree: ${e.verifyLink}` : ''}`,
    })
  })

  // Certifications
  chunks.push({
    id: 'certs',
    topic: 'certifications',
    keywords: ['certification', 'certifications', 'certificate', 'certified', 'aws', 'google', 'stanford', 'coursera', 'credential'],
    text: certifications.map((c) => `${c.name} (${c.issuer}, ${c.date})`).join('. '),
    answer: () =>
      `**Certifications**\n\n${certifications.map((c) => `• ${c.name} — ${c.issuer} (${c.date}${c.status !== 'earned' ? `, ${c.status}` : ''})`).join('\n')}`,
  })

  // Leadership / TEDx / SoReMo
  leadership.forEach((l) => {
    chunks.push({
      id: `lead-${l.title.slice(0, 20)}`,
      topic: 'leadership',
      keywords: ['leadership', 'tedx', 'ted', 'soremo', 'fellow', 'fellowship', 'founder', 'organizer', 'community', 'award', 'led'],
      text: `${l.title}: ${l.description}`,
      answer: () =>
        `**${l.title}**\n\n${l.description}${l.links.length ? `\n\n${l.links.map((x) => `${x.label}: ${x.href}`).join('\n')}` : ''}`,
    })
  })

  // Role fit
  roleFit.forEach((r) => {
    chunks.push({
      id: `fit-${r.role}`,
      topic: 'rolefit',
      keywords: ['hire', 'hiring', 'fit', 'role', 'open to', 'looking', 'position', ...r.role.toLowerCase().split(/[\s/]+/)],
      text: `${r.role}: ${r.pitch} Proof: ${r.proof.join(', ')}`,
      answer: () =>
        `**Fit for ${r.role}:**\n\n${r.pitch}\n\nProof points:\n${r.proof.map((p) => `• ${p}`).join('\n')}`,
    })
  })

  // Volunteer
  chunks.push({
    id: 'volunteer',
    topic: 'volunteer',
    keywords: ['volunteer', 'volunteering', 'community', 'service', 'mlk', 'youth'],
    text: volunteer.map((v) => `${v.role} (${v.date})`).join('. '),
    answer: () =>
      `**Volunteer Experience**\n\n${volunteer.map((v) => `• ${v.role} — ${v.org} (${v.date})`).join('\n')}`,
  })

  // Contact
  chunks.push({
    id: 'contact',
    topic: 'contact',
    keywords: ['contact', 'email', 'reach', 'phone', 'call', 'linkedin', 'github', 'touch', 'connect', 'resume', 'cv', 'hire', 'location', 'chicago', 'based'],
    text: `Email ${profile.email}, phone ${profile.phone}, LinkedIn, GitHub, based in ${profile.location}`,
    answer: () =>
      `You can reach Mohammed directly:\n\n• 📧 Email: ${profile.email}\n• 📱 Phone: ${profile.phone}\n• 💼 LinkedIn: ${profile.linkedin}\n• 💻 GitHub: ${profile.github}\n• 📍 ${profile.location}\n\nOr use the contact form at the bottom of this page — it goes straight to his inbox.`,
  })

  return chunks
}

const KB = buildKnowledgeBase()

// ─── Retrieval ─────────────────────────────────────────────────
const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'has', 'have', 'had', 'what', 'whats', 'his', 'her', 'their', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'and', 'or', 'me', 'you', 'your', 'can', 'i', 'he', 'she', 'they', 'it', 'about', 'tell', 'show', 'any', 'some', 'this', 'that'])

function tokenize(q) {
  return q
    .toLowerCase()
    .replace(/[^\w\s+#]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
}

export function retrieve(query, topK = 2) {
  const tokens = tokenize(query)
  if (tokens.length === 0) return []

  const scored = KB.map((chunk) => {
    let score = 0
    const textLower = chunk.text.toLowerCase()
    tokens.forEach((tok) => {
      // keyword hit = strong signal.
      // Exact match always counts; substring matching only when both sides
      // are >= 3 chars, so single-letter keywords (e.g. "r") can't match everything.
      if (
        chunk.keywords.some(
          (k) =>
            k === tok ||
            (k.length >= 3 && tok.length >= 3 && (k.startsWith(tok) || tok.startsWith(k))),
        )
      )
        score += 3
      // body text hit = weak signal
      if (tok.length >= 3 && textLower.includes(tok)) score += 1
    })
    return { chunk, score }
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, topK)
}

// ─── Intent shortcuts (greeting, thanks, etc.) ─────────────────
const GREETING = /^(hi|hello|hey|yo|sup|good (morning|afternoon|evening))\b/i
const THANKS = /\b(thanks|thank you|thx|appreciate)\b/i

export function answerQuery(query) {
  const q = query.trim()

  if (GREETING.test(q) && tokenize(q).length <= 2) {
    return {
      text: `Hi! 👋 I'm SahilAI — a retrieval-based assistant built into this portfolio, answering from Mohammed's real project and experience data.\n\nAsk me things like:\n• "What ML projects has he built?"\n• "What's his NLP experience?"\n• "Is he a fit for a Data Analyst role?"\n• "How do I contact him?"`,
      sources: [],
    }
  }

  if (THANKS.test(q)) {
    return {
      text: `You're welcome! If you're hiring for data, analytics, or AI/ML roles — Mohammed would love to hear from you. 📧 ${profile.email}`,
      sources: [],
    }
  }

  const hits = retrieve(q, 2)

  if (hits.length === 0) {
    return {
      text: `I couldn't find that in the portfolio data. I can answer questions about Mohammed's:\n\n• Projects (ML, NLP, BI, dashboards)\n• Work experience\n• Skills & tools\n• Education & certifications\n• Leadership (TEDx, SoReMo)\n• How to contact him\n\nTry rephrasing, or email him directly: ${profile.email}`,
      sources: [],
    }
  }

  // Single strong hit → its full answer. Two hits → combine.
  const parts = hits.map((h) => h.chunk.answer())
  return {
    text: parts.join('\n\n---\n\n'),
    sources: hits.map((h) => h.chunk.topic),
  }
}

export const SUGGESTED_QUESTIONS = [
  'What ML projects has he built?',
  "What's his NLP experience?",
  'Is he a fit for a Data Analyst role?',
  'What dashboards has he created?',
  'Tell me about MindBridgeAI',
  'How do I contact him?',
]
