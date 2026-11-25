import { MapPin } from 'lucide-react'
import { profile, links } from '../data.js'
import LinkButton from './LinkButton.jsx'
import { Typer } from './Fx.jsx'

const roles = ['AI Engineer.', 'Software Engineer.', 'RAG Builder.', 'Full-Stack Developer.']

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
      <div className="blob -right-10 top-24 h-64 w-64 bg-pink/25" aria-hidden="true" />
      <div className="blob bottom-10 left-1/3 h-48 w-48 bg-gold/15" style={{ animationDelay: '-3s' }} aria-hidden="true" />
      <p className="relative flex items-center gap-2 text-sm text-gold"><MapPin className="h-4 w-4" aria-hidden="true" />{profile.location}</p>
      <h1 className="relative mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
        Building <span className="grad-text">Intelligent Solutions</span> Through AI &amp; Software Engineering.
      </h1>
      <p className="relative mt-6 text-lg font-medium text-rose-50">{profile.name} <span className="text-pink">/</span> I'm an aspiring <Typer words={roles} /></p>
      <p className="relative mt-3 max-w-xl text-rose-100/60">{profile.intro}</p>
      <div className="relative mt-9 flex flex-wrap gap-3">
        <a href="#projects" className="inline-flex items-center rounded-lg bg-gradient-to-r from-pink to-gold px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:brightness-110">Explore My Projects</a>
        <a href="#contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-gold/70">Contact Me</a>
        <LinkButton href={links.resume} icon="Download" download className="!py-3">Download Resume</LinkButton>
      </div>
    </section>
  )
}
