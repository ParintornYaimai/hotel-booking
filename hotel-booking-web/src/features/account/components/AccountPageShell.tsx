import type { ReactNode } from 'react'

import { AppFooter } from '@/features/home/components/AppFooter'
import { AppHeader } from '@/features/home/components/AppHeader'
import { Container } from '@/shared/ui/Container'
import { cn } from '@/shared/lib/cn'

import { accountTabs } from '../data/account-page.data'

type AccountPageShellProps = {
  activePath: string
  children: ReactNode
  description: string
  eyebrow?: string
  title: string
}

export function AccountPageShell({
  activePath,
  children,
  description,
  eyebrow = 'Account center',
  title,
}: AccountPageShellProps) {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen bg-[#f6f8fb] pt-24">
        <Container className="pb-16">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.06em] text-ink-900 md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-500">{description}</p>
            <nav className="mt-8 flex flex-wrap gap-3 border-b border-line/80 pb-5" aria-label="Account navigation">
              {accountTabs.map((item) => (
                <a
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition',
                    activePath === item.href
                      ? 'bg-brand-500 text-white shadow-glow'
                      : 'bg-white text-ink-600 shadow-sm hover:bg-brand-50 hover:text-brand-700',
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>
          <div className="mt-8">{children}</div>
        </Container>
      </main>
      <AppFooter />
    </>
  )
}
