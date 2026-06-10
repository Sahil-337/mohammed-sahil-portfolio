import { useEffect, useRef, useState } from 'react'

// Smoothly counts a number up from 0 to `to` once the element becomes visible.
// Returns [ref, displayed] — attach ref to the element you want to observe.
export function useCountUp(to, { duration = 1200, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const start = () => {
      if (startedRef.current) return
      startedRef.current = true
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration)
        // ease-out-cubic
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(to * eased)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start()
        })
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  const displayed =
    decimals === 0 ? Math.round(value).toLocaleString() : value.toFixed(decimals)
  return [ref, displayed]
}
