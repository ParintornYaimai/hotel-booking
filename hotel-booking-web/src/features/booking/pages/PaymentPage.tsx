import { AppFooter } from '@/features/home/components/AppFooter'
import { AppHeader } from '@/features/home/components/AppHeader'
import { Container } from '@/shared/ui/Container'

import { BookingSummary } from '../components/BookingSummary'
import { StepIndicator } from '../components/StepIndicator'
import { useBookingLocale } from '../locales'

export function PaymentPage() {
  const { payment } = useBookingLocale()

  return (
    <>
      <AppHeader />
      <main className="bg-surface pt-16">
        <section className="border-y border-line/70 bg-white">
          <Container className="overflow-x-auto py-9">
            <StepIndicator active={2} size="compact" />
          </Container>
        </section>
        <Container className="py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <section className="rounded-4xl bg-white p-8 shadow-card">
              <h1 className="font-display text-3xl font-extrabold tracking-[-0.05em] text-ink-900">
                {payment.title}
              </h1>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {payment.methods.map((method, index) => (
                  <button
                    className={`rounded-3xl border p-5 text-left font-semibold ${
                      index === 0 ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-line text-ink-600'
                    }`}
                    type="button"
                    key={method}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <form className="mt-8 grid gap-5">
                {[
                  ['cardholderName', payment.placeholders.cardholderName],
                  ['cardNumber', payment.placeholders.cardNumber],
                ].map(([key, value]) => (
                  <label className="block" key={key}>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
                      {payment.fields[key as keyof typeof payment.fields]}
                    </span>
                    <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" defaultValue={value} />
                  </label>
                ))}
                <div className="grid gap-5 md:grid-cols-2">
                  <label>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">{payment.fields.expiryDate}</span>
                    <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" placeholder={payment.placeholders.expiryDate} />
                  </label>
                  <label>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">{payment.fields.cvv}</span>
                    <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" placeholder={payment.placeholders.cvv} />
                  </label>
                </div>
              </form>
              <div className="mt-6 rounded-3xl bg-brand-50 p-5 text-sm text-brand-700">
                {payment.secure}
              </div>
              <a
                className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-brand-500 font-display font-semibold text-white shadow-glow"
                href="/booking-success"
              >
                {payment.payNow}
              </a>
            </section>
            <BookingSummary />
          </div>
        </Container>
      </main>
      <AppFooter />
    </>
  )
}
