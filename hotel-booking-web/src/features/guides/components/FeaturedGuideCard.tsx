import { images } from '@/features/home/data/home-page.data'

import { useGuidesLocale } from '../locales'

export function FeaturedGuideCard() {
  const { featured } = useGuidesLocale()

  return (
    <article className="grid overflow-hidden rounded-[1.5rem] bg-[#f3f4f6] shadow-card lg:grid-cols-[1.4fr_1fr]">
      <div className="relative min-h-[28rem] overflow-hidden">
        <img alt="" className="size-full object-cover" src={images.santorini} />
        <span className="absolute left-8 top-6 rounded-full bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-brand-600 shadow-sm">
          {featured.badge}
        </span>
      </div>
      <div className="flex flex-col justify-center px-10 py-12 lg:px-16">
        <h2 className="max-w-sm font-display text-5xl font-extrabold leading-[0.96] tracking-[-0.06em] text-ink-900">
          {featured.title}
        </h2>
        <p className="mt-8 max-w-sm text-base leading-7 text-ink-600">
          {featured.description}
        </p>
        <div className="mt-10 flex items-center justify-between border-t border-line pt-8">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-ink-700 text-xs font-bold text-white">
              ER
            </span>
            <div>
              <p className="text-sm font-bold text-ink-900">{featured.author}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-500">
                {featured.readTime}
              </p>
            </div>
          </div>
          <a
            aria-label={featured.ariaLabel}
            className="grid size-12 place-items-center rounded-full bg-brand-600 text-xl font-bold text-white"
            href="/travel-guides"
          >
            -
          </a>
        </div>
      </div>
    </article>
  )
}
