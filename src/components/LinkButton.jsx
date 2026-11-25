import Icon from './Icon.jsx'

const styles = {
  primary: 'bg-gradient-to-r from-pink to-gold text-ink font-semibold hover:brightness-110 hover:-translate-y-0.5',
  secondary: 'border border-white/15 bg-white/5 text-white hover:border-gold/70 hover:-translate-y-0.5'
}

// Renders a real link when href is set; otherwise a disabled, labelled placeholder.
export default function LinkButton({ href, children, icon, variant = 'secondary', external = false, download = false, className = '' }) {
  const base = `inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${styles[variant]} ${className}`
  if (!href) {
    return (
      <button type="button" disabled title="Placeholder: add this link in src/data.js" className={`${base} cursor-not-allowed opacity-45`}>
        {icon && <Icon name={icon} className="h-4 w-4" />}{children}<span className="text-xs">(add link)</span>
      </button>
    )
  }
  return (
    <a href={href} className={base} {...(download ? { download: true } : {})} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {icon && <Icon name={icon} className="h-4 w-4" />}{children}
    </a>
  )
}
