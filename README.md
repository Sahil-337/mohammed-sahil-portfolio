# Mohammed Sahil — Portfolio (v7)

Data Science / AI Engineering portfolio. React + Vite + Tailwind, deployed on Vercel.

**New in v7:** SahilAI assistant (RAG-style, with optional Claude LLM upgrade), Vercel Analytics with custom event tracking, working contact form, phone contact, Generative AI & LLMs skill category.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
```

Deploy: push to the GitHub repo connected to Vercel. Auto-detects Vite. No config changes.

---

## 1 · Visitor analytics (see who's visiting — setup: 2 minutes)

The site ships with `@vercel/analytics` already wired in. To activate:

1. Go to your project on **vercel.com → Analytics tab → Enable**
2. Redeploy (push any commit)
3. Done. Data appears within minutes.

**What you'll see (private to you):** page views, unique visitors, countries, cities, devices, browsers, referrers (e.g., "came from LinkedIn"), and **custom events**:

| Event | Fires when |
|---|---|
| `resume_download` | Someone downloads your resume (hero or contact) |
| `email_click` / `phone_click` | Someone clicks your email/phone |
| `linkedin_click` / `github_click` | Outbound profile clicks |
| `assistant_open` | Someone opens SahilAI |
| `assistant_question` | A question is asked (first 80 chars logged) |
| `contact_form_submit` | The contact form is submitted |

**Honest limits:** No website can tell you the *name* of an anonymous visitor — browsers don't expose identity. What you CAN do:

- **UTM-tag your links per application.** When you apply to, say, Uber, put this link on that resume/application: `https://your-site.vercel.app/?utm_source=uber-analyst-app`. Vercel Analytics shows referrer/UTM breakdowns — so when you see a visit from `uber-analyst-app`, you know that recruiter opened it. Make one tag per application.
- The contact form and SahilAI questions are the moments visitors *identify themselves* — both are tracked.

(Optional alternative: Google Analytics 4 gives more depth but adds cookie-consent complexity. Vercel Analytics is cookieless and privacy-clean — better for a portfolio.)

---

## 2 · Contact form (direct email — setup: 3 minutes)

The form currently falls back to opening the visitor's mail client (always works). To make it send straight to your inbox silently:

1. Create a free account at **formspree.io** → New Form → use your email `mohammedsahil786sz@gmail.com`
2. Copy your form ID (looks like `xqkrwyab`)
3. In `src/components/Contact.jsx`, replace `YOUR_FORM_ID` in:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
4. Commit + push. Done — 50 free submissions/month, spam-filtered.

---

## 3 · SahilAI assistant

Works out of the box: a client-side RAG pipeline (chunking → retrieval → ranked synthesis) over your portfolio content in `src/data/content.js`. Update content there and the assistant's knowledge updates automatically. Zero cost, zero API keys, never breaks.

**Optional: upgrade to a real Claude-powered chat (setup: 5 minutes)**

1. Get an API key at **console.anthropic.com**
2. On Vercel: **Project → Settings → Environment Variables** → add `ANTHROPIC_API_KEY`
3. Redeploy. The widget detects `/api/chat` automatically and upgrades; without the key it silently falls back to local retrieval.

Cost control: the function uses Claude Haiku capped at 500 output tokens (~$0.001–0.003 per question). Even 500 recruiter questions ≈ a dollar or two. The system prompt grounds answers in your real facts only and forbids inventing credentials or discussing visa status.

---

## 4 · File placement

| Asset | Path |
|---|---|
| Resume | `/public/Mohammed-Sahil-Resume.pdf` (bundled) |
| Profile photo | `/public/profile.jpg` (bundled) |
| Dashboard screenshots (later) | `/public/dashboards/*.png` |
| All copy/content | `src/data/content.js` — single source of truth |
| Assistant knowledge | auto-generated from `content.js` (`src/lib/assistantEngine.js`) |
| Serverless LLM endpoint | `/api/chat.js` |

---

## Structure

```
portfolio-v2/
├── api/
│   └── chat.js                  ← optional Claude-powered endpoint
├── public/                      ← resume, profile.jpg, favicon
└── src/
    ├── data/content.js          ← ALL copy lives here
    ├── lib/
    │   ├── analytics.js         ← event tracking helper
    │   └── assistantEngine.js   ← SahilAI retrieval engine
    ├── hooks/                   ← useReveal, useCountUp, useTheme, useActiveSection
    └── components/              ← 20 components incl. PortfolioAssistant
```
