import { profile, links } from '../data.js'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 text-sm text-rose-100/50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a className="hover:text-gold" href={`tel:${links.phone}`}>Call</a>
          <a className="hover:text-gold" href={`mailto:${links.email}`}>Email</a>
          {links.github && <a className="hover:text-gold" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {links.linkedin && <a className="hover:text-gold" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          <a className="hover:text-gold" href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
