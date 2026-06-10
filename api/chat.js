// /api/chat — optional LLM upgrade for SahilAI.
// Deploy on Vercel with env var ANTHROPIC_API_KEY to activate.
// Without the key, this returns 503 and the widget falls back to
// client-side retrieval automatically. Zero risk of a broken site.
//
// Architecture: true RAG — the portfolio knowledge is injected as
// grounded context, and the model is instructed to answer ONLY from it.

const PORTFOLIO_CONTEXT = `
You are SahilAI, an assistant embedded in Mohammed Sahil's portfolio website.
Answer questions from recruiters and visitors about Mohammed using ONLY the facts below.
Be concise, professional, and warm. If asked something not covered, say so and point to his email.
Never invent metrics, employers, or skills. Never discuss visa/immigration status.

=== FACTS ===
NAME: Mohammed Sahil — Data Scientist, Chicago, IL
CONTACT: mohammedsahil786sz@gmail.com · 630-888-2856 · linkedin.com/in/mohammed-sahil-d2d15 · github.com/Sahil-337
EDUCATION: Master of Applied Science, Data Science — Illinois Institute of Technology (May 2025, GPA 3.50). BE Computer Science — AMC Engineering College/VTU (Aug 2022, GPA 3.54).
CURRENT ROLE: Machine Learning & AI Strategy Analyst at a confidential AI startup (Jul 2025–present): ML validation frameworks for multi-modal AI systems, ~20% cross-modal consistency improvement, 50+ evaluation cycles, KPI dashboards, validation protocol documentation.
PAST ROLES: Graduate Research Assistant — Illinois Tech Community Engagement Council (250+ initiatives, 5,000+ community members impacted). Business Data Analyst — WNDR Museum (sentiment analysis + dashboards, +30% engagement, +25% planning efficiency, 85% planning accuracy, −20% reporting discrepancies). AI Product Analyst — Greater Than Equal (market fit analysis, GPT/AI agent, +20% decision-making, +30% CSAT, +25% process efficiency). Customer Success Engineer — GlowTouch Technologies (100+ accounts, +25% performance, +30% satisfaction).
KEY PROJECTS: MindBridgeAI — NLP mental health support system, 2,500+ students, 1,000+ survey responses, +35% response accuracy, SoReMo fellowship (github.com/Sahil-337/MindBridgeAI). Boston Housing predictive modeling — 92% accuracy, 95% CV confidence (github.com/Sahil-337/Boston_Housing_Project). WWII bombing time-series — 82% forecast accuracy. Disneyland sentiment Naive Bayes — 85% accuracy on 42,656 reviews. Market analysis dashboard — +20% traffic, +15% ROI. ReImage CNN+SVD low-light image enhancement. This portfolio's own AI assistant (retrieval-based RAG architecture).
SKILLS: Python, SQL, R, Pandas, NumPy, Scikit-learn, XGBoost, Random Forest, Naive Bayes, NLP, TF-IDF, embeddings, sentiment analysis, model evaluation (RMSE/F1/AUC), cross-validation, feature engineering, time series, A/B testing, Power BI, Tableau, Excel, Retool, Git, AWS (Cloud Practitioner certified), Hadoop, data validation, KPI dashboards, prompt engineering, GPT/AI agents, RAG architecture.
CERTIFICATIONS: AWS Cloud Practitioner (2021), Stanford Intro to Statistics (2023), Google Data Analytics Professional Certificate (2023).
LEADERSHIP: Founder & Lead Organizer, TEDxIllinois Tech (2 production cycles — ted.com/tedx/events/59836 and /63757). SoReMo Fellow. Graduate Pathway Scholarship, Clinton E. Stryker Award, Outstanding First Year Involvement Award, VTU Math Gold Medalist x2, National Merit Scholar.
OPEN TO: Data Analyst, BI Analyst, Product Analyst, Data Scientist, ML/AI Analyst, Analytics Engineer roles.
=== END FACTS ===
`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    // Not configured — widget falls back to client-side retrieval
    return res.status(503).json({ error: 'LLM not configured' })
  }

  try {
    const { query, history = [] } = req.body || {}
    if (!query || typeof query !== 'string' || query.length > 500) {
      return res.status(400).json({ error: 'Invalid query' })
    }

    const messages = [
      ...history
        .filter((m) => m && m.role && m.text)
        .map((m) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: String(m.text).slice(0, 1000),
        })),
      { role: 'user', content: query },
    ]

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: PORTFOLIO_CONTEXT,
        messages,
      }),
    })

    if (!response.ok) {
      return res.status(503).json({ error: 'LLM unavailable' })
    }

    const data = await response.json()
    const text = (data.content || [])
      .map((b) => (b.type === 'text' ? b.text : ''))
      .join('')
      .trim()

    return res.status(200).json({ text, sources: ['llm'] })
  } catch (err) {
    return res.status(503).json({ error: 'LLM error' })
  }
}
