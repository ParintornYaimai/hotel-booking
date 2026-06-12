import { cn } from '@/shared/lib/cn'

type SectionHeadingProps = {
  align?: 'left' | 'center'
  eyebrow?: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  align = 'left',
  description,
  eyebrow,
  tone = 'light',
  title,
}: SectionHeadingProps) {
  const isCentered = align === 'center'
  const isDark = tone === 'dark'

  return (
    <div className={cn('max-w-3xl', isCentered && 'mx-auto text-center')}>
      {eyebrow && <p className="text-sm font-semibold tracking-[-0.03em] text-brand-600">{eyebrow}</p>}
      <h2
        className={cn(
          eyebrow && 'mt-2',
          'font-display text-3xl font-extrabold leading-tight tracking-[-0.05em] md:text-4xl',
          isDark ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mt-2 text-sm leading-6',
          isDark ? 'text-white/68' : 'text-ink-500',
        )}
      >
        {description}
      </p>
    </div>
  )
}
