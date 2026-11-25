import { useEffect, useRef, useState } from 'react'

export function Glow() {
  const ref = useRef(null)
  useEffect(() => {
    const m = (e) => { if (ref.current) ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)` }
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [])
  return <div ref={ref} aria-hidden="true" className="glow" />
}

export function Progress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => { const h = document.documentElement; setP(h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1)) }
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return <div aria-hidden="true" className="fixed left-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-pink to-gold" style={{ width: `${p * 100}%` }} />
}

export function Typer({ words }) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const wait = !del && n === w.length ? 1300 : del ? 40 : 85
    const t = setTimeout(() => {
      if (!del) { n < w.length ? setN(n + 1) : setDel(true) }
      else if (n > 0) setN(n - 1)
      else { setDel(false); setI((i + 1) % words.length) }
    }, wait)
    return () => clearTimeout(t)
  }, [n, del, i, words])
  return <span className="grad-text">{words[i].slice(0, n)}<span className="caret" aria-hidden="true" /></span>
}

// Counts up when scrolled into view, resets when it leaves (so it replays).
export function Count({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    let raf
    const io = new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf)
      if (!e.isIntersecting) { setV(0); return }
      const t0 = performance.now()
      const step = (t) => { const p = Math.min((t - t0) / 1400, 1); setV(to * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step) }
      raf = requestAnimationFrame(step)
    })
    io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}

export function Tilt({ children, className = '' }) {
  const ref = useRef(null)
  const mv = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`
  }
  return <div ref={ref} onMouseMove={mv} onMouseLeave={() => { ref.current.style.transform = '' }} className={className}>{children}</div>
}
