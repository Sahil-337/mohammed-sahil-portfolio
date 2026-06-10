// Lightweight marquee — pure CSS, no library. Tech names instead of fake logos.
const techs = [
  'Python', 'SQL', 'XGBoost', 'Scikit-learn', 'NLP', 'TF-IDF',
  'Power BI', 'Tableau', 'Pandas', 'NumPy', 'Jupyter', 'Retool',
  'AWS', 'Random Forest', 'A/B Testing', 'Time Series', 'Transformers',
  'Sentiment Analysis', 'Cross-Validation', 'Model Evaluation',
]

export default function TechMarquee() {
  // Duplicate list once for seamless loop
  const all = [...techs, ...techs]

  return (
    <div className="relative overflow-hidden border-y border-ink-900/10 bg-paper py-6 dark:border-white/10 dark:bg-night-900">
      <div className="marquee-mask">
        <div className="marquee">
          {all.map((t, i) => (
            <span
              key={i}
              className="mx-6 inline-flex shrink-0 items-center gap-2 font-mono text-sm uppercase tracking-wider text-ink-500 dark:text-ink-400"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-glow" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
