import { AppFooter } from '@/features/home/components/AppFooter'
import { AppHeader } from '@/features/home/components/AppHeader'
import { Container } from '@/shared/ui/Container'

import { StepIndicator } from '../components/StepIndicator'
import { useBookingLocale } from '../locales'

export function BookingSuccessPage() {
  const { success } = useBookingLocale()

  return (
    <>
      <AppHeader />
      <main className="bg-surface pt-16">
        <section className="border-y border-line/70 bg-white">
          <Container className="overflow-x-auto py-9">
            <StepIndicator active={3} size="compact" />
          </Container>
        </section>
        <Container className="max-w-4xl py-10 text-center">
          <section className="rounded-[2rem] bg-white p-10 shadow-elevated">
            <div className="mx-auto grid size-20 place-items-center rounded-full bg-brand-50 text-3xl font-black text-brand-600">
              OK
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{success.badge}</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold tracking-[-0.06em] text-ink-900">
              {success.title}
            </h1>
            <p className="mt-4 text-ink-500">{success.subtitle}</p>
            <div className="mx-auto mt-8 grid max-w-2xl gap-4 text-left md:grid-cols-2">
              {success.details.map(([label, value]) => (
                <div className="rounded-3xl bg-surface p-5" key={label}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">{label}</p>
                  <p className="mt-2 font-semibold text-ink-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a className="rounded-full bg-brand-500 px-7 py-4 font-display font-semibold text-white shadow-glow" href="/bookings">
                {success.actions.viewBookings}
              </a>
              <a className="rounded-full bg-brand-50 px-7 py-4 font-display font-semibold text-brand-700" href="/">
                {success.actions.backHome}
              </a>
            </div>
          </section>
        </Container>
      </main>
      <AppFooter />
    </>
  )
}
