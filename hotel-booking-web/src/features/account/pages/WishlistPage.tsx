import { AccountPageShell } from '../components/AccountPageShell'
import { wishlistStays } from '../data/account-page.data'

export function WishlistPage() {
  return (
    <AccountPageShell
      activePath="/wishlist"
      description="Saved properties stay organized here so you can compare rates, moods, and destinations before committing to the next trip."
      title="Wishlist"
    >
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {wishlistStays.map((stay) => (
          <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-card" key={stay.title}>
            <div className="relative">
              <img alt="" className="h-60 w-full object-cover" src={stay.image} />
              <span className="absolute right-4 top-4 size-3 rounded-full bg-rose-500 shadow-[0_0_0_6px_rgba(255,255,255,0.72)]" />
            </div>
            <div className="space-y-4 p-5">
              <div>
                <h2 className="font-display text-xl font-extrabold tracking-[-0.04em] text-ink-900">
                  {stay.title}
                </h2>
                <p className="mt-2 text-sm text-ink-500">{stay.location}</p>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-400">From</p>
                  <p className="mt-2 font-display text-3xl font-extrabold tracking-[-0.05em] text-brand-600">
                    {stay.price}
                  </p>
                </div>
                <p className="pb-1 text-sm text-ink-500">per night</p>
              </div>
              <div className="flex gap-3">
                <a
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600"
                  href="/stays"
                >
                  Book now
                </a>
                <a
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
                  href="/hotel-detail"
                >
                  View stay
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </AccountPageShell>
  )
}
