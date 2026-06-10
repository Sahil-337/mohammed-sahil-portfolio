import { useEffect, useState } from 'react'

export function useActiveSection(ids, options = {}) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!ids || ids.length === 0) return

    const observers = []
    const visibility = new Map()

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(id, entry.intersectionRatio)
          })
          // pick the most-visible section
          let bestId = active
          let bestRatio = 0
          for (const [k, v] of visibility) {
            if (v > bestRatio) {
              bestRatio = v
              bestId = k
            }
          }
          if (bestRatio > 0) setActive(bestId)
        },
        {
          rootMargin: options.rootMargin || '-30% 0px -55% 0px',
          threshold: options.threshold || [0, 0.25, 0.5, 0.75, 1],
        },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')])

  return active
}
