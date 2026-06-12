import { useGuidesLocale } from '../locales'

type GuideArticleCardProps = {
  author: string
  category: string
  description: string
  illustration: 'mountains' | 'beach' | 'city' | 'hidden' | 'wellness' | 'stay'
  readTime: string
  title: string
}

const illustrationClassNames: Record<GuideArticleCardProps['illustration'], string> = {
  beach: 'bg-[linear-gradient(180deg,#55c6e8_0%,#c8f2ff_45%,#f9d99b_46%,#f5c778_100%)]',
  city: 'bg-[linear-gradient(180deg,#0e5f7f_0%,#0a3246_100%)]',
  hidden: 'bg-[radial-gradient(circle_at_40%_42%,#f5b35d_0_22%,transparent_23%),linear-gradient(135deg,#14392f,#071915)]',
  mountains: 'bg-[linear-gradient(180deg,#b9eef2_0%,#92d3de_30%,#407889_31%,#0f3541_100%)]',
  stay: 'bg-[radial-gradient(circle_at_64%_44%,#8fc7d6_0_11%,transparent_12%),linear-gradient(135deg,#24352f,#0b1311)]',
  wellness: 'bg-[radial-gradient(circle_at_50%_48%,#10262b_0_20%,transparent_21%),linear-gradient(135deg,#111919,#050707)]',
}

export function GuideArticleCard({
  author,
  category,
  description,
  illustration,
  readTime,
  title,
}: GuideArticleCardProps) {
  const { articleOverlayLabel } = useGuidesLocale()

  return (
    <article>
      <div
        className={`relative h-[260px] overflow-hidden rounded-2xl ${illustrationClassNames[illustration]}`}
      >
        <span className="absolute left-4 top-4 rounded bg-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-ink-900">
          {category}
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-6 text-center text-2xl font-black uppercase tracking-[0.08em] text-white/85">
          {illustration === 'city' || illustration === 'hidden' || illustration === 'stay'
            ? articleOverlayLabel
            : ''}
        </div>
      </div>
      <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-[-0.04em] text-ink-900">
        {title}
      </h3>
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-ink-600">{description}</p>
      <p className="mt-6 text-[10px] font-bold text-ink-900">
        {author}
        <span className="mx-3 text-ink-400">-</span>
        <span className="uppercase tracking-[0.12em] text-ink-600">{readTime}</span>
      </p>
    </article>
  )
}
