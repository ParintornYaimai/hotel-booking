import { Container } from '@/shared/ui/Container'

import { useHomeLocale } from '../locales'

export function AppFooter() {
  const { footer } = useHomeLocale()

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-ink-900">{footer.brand}</p>
          <p className="mt-6 max-w-xs text-xs leading-5 text-ink-500">
            {footer.description}
          </p>
          <div className="mt-6 flex gap-4 text-ink-500">
            <span>o</span>
            <span>o</span>
            <span>o</span>
          </div>
        </div>
        {footer.groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-sm font-bold text-ink-900">{group.title}</h3>
            <ul className="mt-6 space-y-4 text-xs tracking-[0.03em] text-ink-500">
              {group.links.map((link) => (
                <li key={link}>
                  <a className="transition hover:text-brand-700" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-display text-sm font-bold text-ink-900">{footer.newsletter.cta}</h3>
          <p className="mt-6 text-xs tracking-[0.03em] text-ink-500">
            {footer.newsletter.description}
          </p>
          <form className="relative mt-6">
            <input
              className="h-11 w-full rounded-full border border-line bg-white px-5 text-xs text-ink-600 outline-none transition focus:border-brand-500"
              placeholder={footer.newsletter.placeholder}
              type="email"
            />
            <button
              className="absolute right-1.5 top-1.5 grid size-8 place-items-center rounded-full bg-brand-600 text-white"
              type="submit"
            >
              -&gt;
            </button>
          </form>
        </div>
      </Container>
      <Container className="flex flex-col justify-between gap-4 border-t border-line py-8 text-xs tracking-[0.03em] text-ink-500 md:flex-row md:items-center">
        <p>{footer.copyright}</p>
        <div className="flex gap-6">
          {footer.secondaryLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
