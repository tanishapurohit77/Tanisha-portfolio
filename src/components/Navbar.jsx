import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data.js'

const nav = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['education', 'Education'], ['leadership', 'Leadership'], ['resume', 'Resume'], ['contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8" aria-label="Main">
        <a href="#top" className="font-display text-lg font-semibold text-white">{profile.name}</a>
        <ul className="hidden gap-6 text-sm md:flex">
          {nav.map(([id, label]) => <li key={id}><a href={`#${id}`} className="text-rose-100/60 transition hover:text-gold">{label}</a></li>)}
        </ul>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-ink px-5 py-3 md:hidden">
          {nav.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2.5 text-rose-100/80">{label}</a></li>)}
        </ul>
      )}
    </header>
  )
}
