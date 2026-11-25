import Reveal from './Reveal.jsx'

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-rose-100/60">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}
