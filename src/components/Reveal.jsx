import { useEffect, useRef, useState } from 'react'

// Fades/slides in when scrolled into view and back out when scrolled away.
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => setShown(e.isIntersecting), { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</div>
}
