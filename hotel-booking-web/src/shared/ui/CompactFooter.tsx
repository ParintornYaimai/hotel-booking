import { Container } from '@/shared/ui/Container'
import { useHomeLocale } from '@/features/home/locales'

export function CompactFooter() {
  const { compactFooter } = useHomeLocale()

  return (
    <footer className="border-t border-line bg-white">
      <Container className="grid gap-10 py-8 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] lg:gap-8 lg:py-10">
        <div>
          <p className="font-display text-[1.05rem] font-bold text-ink-900">{compactFooter.brand}</p>
          <p className="mt-3 max-w-[15rem] text-[0.72rem] leading-5 text-ink-500">
            {compactFooter.description}
          </p>
        </div>
        {compactFooter.groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[0.58rem] font-extrabold uppercase tracking-[0.12em] text-ink-900">
              {group.title}
            </h3>
            <div className="mt-4 space-y-2.5 text-[0.72rem] text-ink-500">
              {group.links.map((link) => (
                <a className="block transition hover:text-brand-700" href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col justify-between gap-3 border-t border-line py-4 text-[0.68rem] text-ink-400 sm:flex-row sm:items-center">
        <p>{compactFooter.copyright}</p>
        <div className="flex items-center gap-4 text-ink-400">
          <a aria-label={compactFooter.iconLabels.global} className="transition hover:text-brand-600" href="#">
            <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 24 24" width="14">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3.5 12h17M12 3.5c2 2 3 5.1 3 8.5s-1 6.5-3 8.5c-2-2-3-5.1-3-8.5s1-6.5 3-8.5Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <a aria-label={compactFooter.iconLabels.share} className="transition hover:text-brand-600" href="#">
            <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 24 24" width="14">
              <path d="M15.5 7.5 8.5 11m7 2L8.5 17.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
              <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <a aria-label={compactFooter.iconLabels.email} className="transition hover:text-brand-600" href="#">
            <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 24 24" width="14">
              <rect height="12" rx="2" stroke="currentColor" strokeWidth="1.5" width="17" x="3.5" y="6" />
              <path d="m5 8 7 5 7-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  )
}
