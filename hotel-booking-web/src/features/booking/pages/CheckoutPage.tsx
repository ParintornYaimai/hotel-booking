import { AppHeader } from '@/features/home/components/AppHeader'
import { CompactFooter } from '@/shared/ui/CompactFooter'
import { Container } from '@/shared/ui/Container'

import { StepIndicator } from '../components/StepIndicator'
import {
  checkoutCouponCode,
  checkoutContactFields,
  checkoutGuestCount,
  checkoutPriceLines,
  checkoutReviewStay,
  checkoutSummaryFacts,
} from '../data/checkout-page.data'
import { useBookingLocale } from '../locales'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  minimumFractionDigits: 2,
  style: 'currency',
})

export function CheckoutPage() {
  const { checkout } = useBookingLocale()
  const totalPrice = checkoutPriceLines.reduce((sum, item) => sum + item.amount, 0)

  return (
    <>
      <AppHeader />
      <main className="bg-[#f8f9fb] pt-16">
        <section className="border-y border-line/70 bg-white">
          <Container className="overflow-x-auto py-10 sm:py-12">
            <StepIndicator active={1} size="checkout" />
          </Container>
        </section>
        <Container className="pb-20 pt-12">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_308px]">
            <section className="min-w-0">
              <h1 className="text-[2.2rem] leading-[1.08] font-bold text-ink-900 sm:text-[2.45rem]">
                {checkout.title}
              </h1>
              <p className="mt-2 text-[0.92rem] leading-6 text-ink-500">
                {checkout.subtitle}
              </p>

              <div className="mt-7 space-y-6">
                <article className="rounded-[1.05rem] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-brand-100 text-[0.8rem] font-bold text-brand-700 tabular-nums">
                      1
                    </span>
                    <h2 className="text-[1.05rem] font-semibold text-ink-900">{checkout.sectionTitles.contact}</h2>
                  </div>
                  <form className="mt-6 grid gap-4 sm:grid-cols-2">
                    {checkoutContactFields.map((field) => (
                      <label className={field.wide ? 'block sm:col-span-2' : 'block'} key={field.key}>
                        <span className="text-[0.8rem] font-semibold text-ink-700">
                          {checkout.contactFields[field.key]}
                        </span>
                        <input
                          className="mt-2 h-12 w-full rounded-[0.7rem] border border-[#edf1f5] bg-[#f7f8fa] px-4 text-[0.9rem] text-ink-700 outline-none transition placeholder:text-[#b6bcc6] focus:border-brand-500 focus:bg-white"
                          defaultValue={field.value}
                        />
                      </label>
                    ))}
                  </form>
                </article>

                <article className="rounded-[1.05rem] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-brand-100 text-[0.8rem] font-bold text-brand-700 tabular-nums">
                      2
                    </span>
                    <h2 className="text-[1.05rem] font-semibold text-ink-900">{checkout.sectionTitles.guest}</h2>
                  </div>
                  <div className="mt-6 grid gap-4">
                    <label className="block">
                      <span className="text-[0.8rem] font-semibold text-ink-700">{checkout.guestCountLabel}</span>
                      <div className="relative mt-2">
                        <select
                          className="h-12 w-full appearance-none rounded-[0.7rem] border border-[#edf1f5] bg-[#f7f8fa] px-4 pr-10 text-[0.9rem] text-ink-700 outline-none transition focus:border-brand-500 focus:bg-white"
                          defaultValue={checkout.guestOptions[checkoutGuestCount - 1]}
                        >
                          {checkout.guestOptions.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#8a94a6]">
                          <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16">
                            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </span>
                      </div>
                    </label>
                    <label className="block">
                      <span className="text-[0.8rem] font-semibold text-ink-700">{checkout.specialRequestsLabel}</span>
                      <textarea
                        className="mt-2 min-h-[4.9rem] w-full rounded-[0.7rem] border border-[#edf1f5] bg-[#f7f8fa] p-4 text-[0.9rem] text-ink-700 outline-none transition placeholder:text-[#b6bcc6] focus:border-brand-500 focus:bg-white"
                        placeholder={checkout.specialRequestsPlaceholder}
                      />
                    </label>
                  </div>
                </article>

                <article className="rounded-[1.05rem] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-brand-100 text-[0.8rem] font-bold text-brand-700 tabular-nums">
                      3
                    </span>
                    <h2 className="text-[1.05rem] font-semibold text-ink-900">{checkout.sectionTitles.review}</h2>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 rounded-[0.8rem] bg-[#f7f8fa] p-4 sm:flex-row sm:items-center">
                    <img alt="" className="h-[5.1rem] w-[7.4rem] rounded-[0.55rem] object-cover" src={checkoutReviewStay.image} />
                    <div className="min-w-0">
                      <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-luxury-amber">
                        {checkout.reviewBadge}
                      </p>
                      <h3 className="mt-1.5 text-[1.12rem] font-semibold text-ink-900">{checkoutReviewStay.title}</h3>
                      <div className="mt-2 space-y-1.5 text-[0.76rem] text-ink-500">
                        <p className="flex items-center gap-1.5">
                          <span aria-hidden="true" className="text-ink-500">
                            <svg fill="none" height="13" viewBox="0 0 16 16" width="13">
                              <rect height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" width="11" x="2.5" y="3.5" />
                              <path d="M5 2.5v2M11 2.5v2M2.5 6.5h11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
                            </svg>
                          </span>
                          {checkout.reviewDetails.dates}
                        </p>
                        <p className="flex items-center gap-1.5">
                          <span aria-hidden="true" className="text-ink-500">
                            <svg fill="none" height="13" viewBox="0 0 16 16" width="13">
                              <path d="M2.5 8.5h11v3a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11.5v-3Zm1-4h4a2 2 0 0 1 2 2v2h-6v-4Zm6 2a2 2 0 0 1 2-2H12a1.5 1.5 0 0 1 1.5 1.5v2H9.5v-2Z" stroke="currentColor" strokeWidth="1.3" />
                            </svg>
                          </span>
                          {checkout.reviewDetails.roomType}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <aside className="h-fit lg:sticky lg:top-24">
              <section className="rounded-[1.05rem] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-[1.05rem] font-semibold text-ink-900">{checkout.summaryLabels.bookingDetails}</h2>
                <div className="mt-4 space-y-4">
                  {checkoutSummaryFacts.map((item) => (
                    <div className="flex items-start gap-3" key={item.key}>
                      <span className="grid size-8 shrink-0 place-items-center rounded-[0.7rem] bg-brand-50 text-brand-600">
                        <BookingFactIcon icon={item.icon} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.64rem] font-medium text-ink-500">{checkout.summaryLabels[item.key]}</p>
                        <p className="mt-0.5 text-[0.82rem] font-semibold text-ink-900 tabular-nums">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-4 rounded-[1.05rem] bg-[#f3f5f7] p-5 shadow-[0_20px_56px_rgba(15,23,42,0.07)]">
                <h2 className="text-[1.05rem] font-semibold text-ink-900">{checkout.summaryLabels.priceSummary}</h2>
                <div className="mt-4 space-y-2.5">
                  {checkoutPriceLines.map((item) => (
                    <div className="flex items-center justify-between gap-4 text-[0.82rem]" key={item.key}>
                      <span className="text-ink-500">{checkout.priceLabels[item.key]}</span>
                      <span className="font-medium text-ink-900 tabular-nums">{currencyFormatter.format(item.amount)}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-ink-500">{checkout.couponCode}</p>
                <div className="mt-3 flex gap-2">
                  <input
                    className="h-10 min-w-0 flex-1 rounded-[0.5rem] border border-white bg-white px-3 text-[0.72rem] font-medium uppercase text-ink-500 outline-none transition focus:border-brand-500"
                    defaultValue={checkoutCouponCode}
                  />
                  <button className="rounded-[0.5rem] bg-ink-900 px-4 text-[0.78rem] font-semibold text-white" type="button">
                    {checkout.applyCoupon}
                  </button>
                </div>

                <div className="mt-7 flex items-start justify-between gap-4">
                  <div className="pt-1">
                    <p className="text-[1rem] font-semibold text-ink-900">{checkout.summaryLabels.totalPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[2rem] font-extrabold leading-none text-brand-600 tabular-nums">
                      {currencyFormatter.format(totalPrice)}
                    </p>
                    <p className="mt-1 text-[0.62rem] text-ink-400">{checkout.summaryLabels.totalPriceNote}</p>
                  </div>
                </div>

                <a
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 text-[0.88rem] font-semibold text-white shadow-[0_16px_32px_rgba(26,115,232,0.28)] transition hover:bg-brand-600"
                  href="/payment"
                >
                  {checkout.proceed}
                  <span aria-hidden="true">
                    <svg fill="none" height="14" viewBox="0 0 16 16" width="14">
                      <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                    </svg>
                  </span>
                </a>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.62rem] text-ink-400">
                  <span aria-hidden="true">
                    <svg fill="none" height="11" viewBox="0 0 16 16" width="11">
                      <path d="M5.5 7V5.75A2.5 2.5 0 0 1 8 3.25a2.5 2.5 0 0 1 2.5 2.5V7M4.5 7h7a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 10.5 13h-5A1.75 1.75 0 0 1 3.75 11.25v-3.5A.75.75 0 0 1 4.5 7Z" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </span>
                  {checkout.secure}
                </p>
              </section>
            </aside>
          </div>
        </Container>
      </main>
      <CompactFooter />
    </>
  )
}

type BookingFactIconProps = {
  icon: (typeof checkoutSummaryFacts)[number]['icon']
}

function BookingFactIcon({ icon }: BookingFactIconProps) {
  if (icon === 'calendar') {
    return (
      <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16">
        <rect height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" width="11" x="2.5" y="3.25" />
        <path d="M5 2.25v2M11 2.25v2M2.5 6.25h11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
      </svg>
    )
  }

  if (icon === 'moon') {
    return (
      <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16">
        <path d="M9.9 2.5a4.8 4.8 0 1 0 3.6 8.2A5.55 5.55 0 1 1 9.9 2.5Z" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16">
      <circle cx="5.3" cy="5.4" r="1.7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.75 11.75a2.95 2.95 0 0 1 5.1-2.05M10.6 5.9a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9Zm-1.45 5.85h3.95a1.15 1.15 0 0 0 0-2.3H9.15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
    </svg>
  )
}
