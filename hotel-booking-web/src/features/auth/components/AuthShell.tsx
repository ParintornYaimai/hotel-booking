import type { ReactNode } from 'react'

import { images } from '@/features/home/data/home-page.data'

import { useAuthLocale } from '../locales'

type AuthShellProps = {
  children: ReactNode
  subtitle: string
  title: string
}

export function AuthShell({ children, subtitle, title }: AuthShellProps) {
  const { shell } = useAuthLocale()

  return (
    <main className="min-h-screen bg-surface">
      <header className="flex h-[72px] items-center justify-between px-8">
        <a className="font-display text-2xl font-bold tracking-[-0.05em] text-brand-700" href="/">
          {shell.brand}
        </a>
        <nav className="hidden gap-8 text-sm font-semibold text-ink-600 md:flex">
          {shell.nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <section className="relative isolate flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden px-5 py-12">
        <img alt="" className="absolute inset-0 -z-20 size-full object-cover" src={images.hero} />
        <div className="absolute inset-0 -z-10 bg-white/72 backdrop-blur-sm" />
        <div className="w-full max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-elevated backdrop-blur-xl sm:max-w-[480px] sm:p-10">
          <div className="text-center">
            <h1 className="font-display text-3xl font-extrabold tracking-[-0.05em] text-ink-900">
              {title}
            </h1>
            <p className="mt-2 text-sm text-ink-500">{subtitle}</p>
          </div>
          {children}
        </div>
      </section>
    </main>
  )
}
