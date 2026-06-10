import { forwardRef, useRef, useEffect } from 'react'

// Spotlight wraps content with a class that paints a soft radial gradient
// at the cursor position. Supports an external ref so callers can attach
// IntersectionObservers (e.g. useReveal) to the same element.
const Spotlight = forwardRef(function Spotlight(
  { as: Tag = 'div', className = '', children, ...rest },
  forwardedRef,
) {
  const innerRef = useRef(null)

  // Merge inner + forwarded ref
  useEffect(() => {
    if (!forwardedRef) return
    if (typeof forwardedRef === 'function') forwardedRef(innerRef.current)
    else forwardedRef.current = innerRef.current
  }, [forwardedRef])

  const onMove = (e) => {
    const el = innerRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--y', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <Tag
      ref={innerRef}
      onMouseMove={onMove}
      className={`spotlight ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
})

export default Spotlight
