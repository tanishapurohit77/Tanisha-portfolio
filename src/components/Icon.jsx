import * as L from 'lucide-react'
export default function Icon({ name, className = 'h-5 w-5' }) {
  const C = L[name] || L.Circle
  return <C className={className} aria-hidden="true" />
}
