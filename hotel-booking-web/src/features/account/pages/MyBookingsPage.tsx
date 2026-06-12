import { cn } from '@/shared/lib/cn'
import { Button } from '@/shared/ui/Button'

import { AccountPageShell } from '../components/AccountPageShell'
import { bookings, bookingStats } from '../data/account-page.data'

export function MyBookingsPage() {
  return (
    <AccountPageShell
      activePath="/bookings"
      description="Track upcoming reservations, review confirmed stays, and jump back into trip planning without losing context."
      title="My Bookings"
    >
      <section className="grid gap-4 md:grid-cols-3">
        {bookingStats.map((item) => (
          <article className="rounded-[1.75rem] bg-white p-6 shadow-card" key={item.label}>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">{item.label}</p>
            <p className="mt-3 font-display text-4xl font-extrabold tracking-[-0.05em] text-ink-900">
              {item.value}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[2rem] bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink-900">
              Upcoming stays
            </h2>
            <p className="mt-1 text-sm text-ink-500">Prioritized by arrival date and payment readiness.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            {['All', 'Upcoming', 'Confirmed', 'Premium'].map((label, index) => (
              <span
                className={cn(
                  'rounded-full px-4 py-2',
                  index === 0 ? 'bg-brand-50 text-brand-700' : 'bg-surface text-ink-500',
                )}
                key={label}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {bookings.map((booking) => (
            <article
              className="grid gap-5 rounded-[1.75rem] border border-line/80 bg-white p-4 shadow-sm md:grid-cols-[220px_1fr_auto]"
              key={booking.reference}
            >
              <img alt="" className="h-48 w-full rounded-[1.5rem] object-cover md:h-full" src={booking.image} />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
                    {booking.status}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
                    {booking.reference}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.04em] text-ink-900">
                  {booking.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{booking.location}</p>

                <div className="mt-5 grid gap-4 text-sm text-ink-600 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-400">Dates</p>
                    <p className="mt-2 font-semibold text-ink-900">{booking.dates}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-400">Stay details</p>
                    <p className="mt-2 font-semibold text-ink-900">
                      {booking.nights} . {booking.guests}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-400">Trip total</p>
                    <p className="mt-2 font-semibold text-ink-900">{booking.price}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-3 md:items-end">
                <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-ink-900">
                  {booking.price}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600"
                    href={booking.ctaHref}
                  >
                    {booking.ctaLabel}
                  </a>
                  <Button className="border border-line bg-white text-ink-700 shadow-none hover:bg-brand-50" variant="ghost">
                    Download invoice
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AccountPageShell>
  )
}
