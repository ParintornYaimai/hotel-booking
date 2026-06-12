import { Container } from '@/shared/ui/Container'
import { LocaleSwitcher } from '@/shared/ui/LocaleSwitcher'

import { useHomeLocale } from '../locales'

export function AppHeader() {
  const activePath = window.location.pathname
  const { header } = useHomeLocale()

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/80 shadow-sm backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          className="font-display text-xl font-bold tracking-[-0.05em] text-brand-700"
          href="#"
          aria-label={header.activeBrandAriaLabel}
        >
          {header.brand}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {header.navigation.map((item) => (
            <a
              className={`pb-1.5 font-display text-sm font-semibold tracking-[-0.025em] transition ${
                activePath === item.href
                  ? 'border-b-2 border-brand-700 text-brand-700'
                  : 'text-ink-600 hover:text-brand-700'
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <LocaleSwitcher />
          <a
            className="!hidden rounded-full px-6 py-3 font-display text-sm font-semibold text-ink-600 transition hover:bg-brand-50 hover:text-brand-700 md:!inline-flex"
            href="/login"
          >
            {header.signIn}
          </a>
          <a
            className="!hidden rounded-full bg-brand-500 px-4 py-2 font-display text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600 sm:!inline-flex"
            href="/register"
          >
            <span className="hidden sm:inline">{header.listProperty}</span>
            <span className="sm:hidden">{header.listPropertyShort}</span>
          </a>
        </div>
      </Container>
    </header>
  )
}
