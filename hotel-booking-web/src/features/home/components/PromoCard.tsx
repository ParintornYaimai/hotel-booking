import { cn } from '@/shared/lib/cn'

type PromoCardProps = {
  badge: string
  cta: string
  image: string
  title: string
  tone: 'amber' | 'blue'
}

export function PromoCard({ badge, cta, image, title, tone }: PromoCardProps) {
  return (
    <article className="relative min-h-64 overflow-hidden rounded-4xl bg-ink-900 shadow-card">
      <img alt="" className="absolute inset-0 size-full object-cover opacity-70" src={image} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/0" />
      <div className="relative flex h-full flex-col items-start justify-center p-8 md:p-12">
        <span
          className={cn(
            'rounded-full px-4 py-1 text-xs font-bold uppercase text-white',
            tone === 'amber' ? 'bg-luxury-amber' : 'bg-brand-600',
          )}
        >
          {badge}
        </span>
        <h2 className="mt-4 max-w-[18rem] font-display text-2xl font-extrabold leading-tight text-white sm:max-w-sm md:text-4xl">
          {title}
        </h2>
        <a className="mt-4 inline-flex items-center gap-2 font-bold text-white" href="#destinations">
          {cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
