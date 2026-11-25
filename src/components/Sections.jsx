import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import LinkButton from './LinkButton.jsx'
import { Count, Tilt } from './Fx.jsx'
import { profile, stats, skills, projects, experience, education, leadership, links } from '../data.js'

const Tag = ({ children }) => <span className="rounded-md border border-pink/20 bg-pink/10 px-2.5 py-1 text-xs text-rose-100 transition hover:border-gold/70 hover:text-gold">{children}</span>

export function About() {
  return (
    <Section id="about" title="About me">
      <Reveal className="glass p-6 sm:p-8"><p className="max-w-3xl leading-relaxed">{profile.summary}</p></Reveal>
      <div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="glass p-5 text-center">
            <p className="grad-text font-display text-4xl font-bold"><Count to={s.to} decimals={s.decimals || 0} suffix={s.suffix || ''} /></p>
            <p className="mt-1 text-sm text-rose-100/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? skills : skills.filter((s) => s.title === active)
  return (
    <Section id="skills" title="Technical skills" intro="Tap a category to focus on it.">
      <div className="mb-6 flex flex-wrap gap-2" role="tablist">
        {['All', ...skills.map((s) => s.title)].map((t) => (
          <button key={t} role="tab" aria-selected={active === t} onClick={() => setActive(t)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${active === t ? 'border-transparent bg-gradient-to-r from-pink to-gold font-semibold text-ink' : 'border-white/15 text-rose-100/70 hover:border-gold/70'}`}>{t}</button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((s, i) => (
          <Reveal key={s.title + active} delay={i * 50} className={`glass glass-hover p-6 ${active === 'All' && s.title === 'AI / Machine Learning' ? 'md:col-span-2' : ''} ${shown.length === 1 ? 'md:col-span-2' : ''}`}>
            <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-white"><span className="text-gold"><Icon name={s.icon} /></span>{s.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{s.items.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ p, i }) {
  const rag = p.emphasis === 'rag'
  const card = (
    <Tilt className={`flex h-full flex-col p-6 transition-transform duration-200 ${rag ? 'rounded-[0.95rem] bg-panel sm:p-7' : 'glass'}`}>
      {p.badge && (
        <div className="flex items-center">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${rag ? 'bg-gradient-to-r from-pink to-gold text-ink' : 'border border-gold/50 text-gold'}`}>
            <Icon name={rag ? 'Sparkles' : 'Layers'} className="h-3.5 w-3.5" />{p.badge}
          </span>
        </div>
      )}
      <h3 className={`${p.badge ? 'mt-4' : ''} font-display font-semibold text-white ${rag ? 'text-3xl' : 'text-2xl'}`}>{rag ? <span className="grad-text">{p.name}</span> : p.name}</h3>
      <p className="mt-1 text-sm text-gold">{p.subtitle}</p>
      <p className="mt-4 leading-relaxed">{p.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-rose-100/70">
        {p.points.map((x) => (
          <li key={x} className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" aria-hidden="true" />{x}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-1 flex-wrap content-end gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
    </Tilt>
  )
  return (
    <Reveal delay={i * 80} className={i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
      {rag ? (
        <div className="h-full rounded-2xl bg-gradient-to-br from-pink via-pink/40 to-gold p-[1.5px] shadow-[0_0_45px_-10px_rgba(255,79,163,0.6)] lg:scale-[1.03]">{card}</div>
      ) : card}
    </Reveal>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}</div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience and certifications">
      <div className="grid gap-5 md:grid-cols-2">
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 60} className="glass glass-hover p-6">
            <span className="text-pink"><Icon name={e.icon} className="h-6 w-6" /></span>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">{e.title}</h3>
            <p className="text-sm text-gold">{e.org}</p>
            <p className="mt-3 text-sm text-rose-100/60">{e.note}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <Reveal className="glass p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-1">{education.school}</p>
            <p className="mt-1 text-sm text-rose-100/60">Graduating {education.year}</p>
          </div>
          <div className="text-right">
            <p className="grad-text font-display text-3xl font-bold">{education.cgpa}</p>
            <p className="text-sm text-rose-100/60">CGPA</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function Leadership() {
  return (
    <Section id="leadership" title="Leadership and achievements">
      <div className="grid gap-5 sm:grid-cols-2">
        {leadership.map((l, i) => (
          <Reveal key={l.text} delay={i * 60} className="glass glass-hover flex items-start gap-4 p-6">
            <span className="mt-0.5 text-gold"><Icon name={l.icon} className="h-6 w-6" /></span>
            <p className="text-rose-50">{l.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Resume() {
  const [open, setOpen] = useState(false)
  return (
    <Section id="resume" title="Resume" intro="Preview it here or download the PDF.">
      <Reveal className="glass p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setOpen(!open)} aria-expanded={open} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-gold/70">
            <Icon name="Eye" className="h-4 w-4" />{open ? 'Hide preview' : 'Preview resume'}
          </button>
          <LinkButton href={links.resume} icon="Download" variant="primary" download>Download PDF</LinkButton>
        </div>
        <div className={`grid transition-all duration-500 ${open ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <iframe title="Tanisha Purohit resume" src={`${links.resume}#view=FitH`} loading="lazy" className="h-[75vh] w-full rounded-lg bg-white" />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function CopyBtn({ text }) {
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 1500) } catch { /* ignore */ }
  }
  return <button onClick={copy} aria-label={`Copy ${text}`} className="rounded-md p-1.5 text-rose-100/60 transition hover:bg-white/10 hover:text-gold"><Icon name={ok ? 'Check' : 'Copy'} className="h-4 w-4" /></button>
}

export function Contact() {
  const [f, setF] = useState({ name: '', from: '', msg: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const body = `${f.msg}\n\n— ${f.name}${f.from ? ` (${f.from})` : ''}`
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(`Portfolio message from ${f.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const field = 'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-rose-100/40 focus:border-gold focus:outline-none'
  const cards = [
    { icon: 'Phone', label: 'Call', value: links.phoneDisplay, href: `tel:${links.phone}`, copy: links.phoneDisplay },
    { icon: 'Mail', label: 'Email', value: links.email, href: `mailto:${links.email}`, copy: links.email },
    { icon: 'MessageCircle', label: 'WhatsApp', value: 'Chat with me', href: links.whatsapp, external: true }
  ]
  return (
    <Section id="contact" title="Get in touch" intro="Open to AI and software engineering opportunities. Reach out any way you like.">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-5">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 70} className="glass glass-hover flex items-center gap-4 p-5">
              <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="flex min-w-0 flex-1 items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pink to-gold text-ink"><Icon name={c.icon} /></span>
                <span className="min-w-0"><span className="block text-xs uppercase tracking-wide text-gold">{c.label}</span><span className="block truncate text-white">{c.value}</span></span>
              </a>
              {c.copy && <CopyBtn text={c.copy} />}
            </Reveal>
          ))}
          <Reveal className="flex flex-wrap gap-3">
            {links.linkedin && <LinkButton href={links.linkedin} icon="Linkedin" external>LinkedIn</LinkButton>}
            {links.github && <LinkButton href={links.github} icon="Github" external>GitHub</LinkButton>}
          </Reveal>
        </div>
        <Reveal className="glass p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-white">Send a message</h3>
          <form onSubmit={submit} className="mt-5 space-y-4">
            <input required className={field} placeholder="Your name" value={f.name} onChange={set('name')} aria-label="Your name" />
            <input className={field} type="email" placeholder="Your email (optional)" value={f.from} onChange={set('from')} aria-label="Your email" />
            <textarea required rows={5} className={field} placeholder="How can I help?" value={f.msg} onChange={set('msg')} aria-label="Message" />
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink to-gold px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:brightness-110"><Icon name="Send" className="h-4 w-4" />Send message</button>
            {sent && <p className="text-sm text-gold" role="status">Opening your email app with the message ready to send.</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
