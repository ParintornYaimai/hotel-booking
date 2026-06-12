import { AppFooter } from '@/features/home/components/AppFooter'
import { AppHeader } from '@/features/home/components/AppHeader'
import { resultHotels } from '@/features/home/data/home-page.data'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'

export function SearchResultsPage() {
  return (
    <>
      <AppHeader />
      <main className="bg-surface pt-16">
        <section className="border-b border-line bg-white py-10">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="font-display text-4xl font-extrabold tracking-[-0.05em] text-ink-900">
                  Exclusive Stays
                </h1>
                <p className="mt-2 text-sm text-ink-500">
                  Discover 124 curated properties in your selected region.
                </p>
              </div>
              <div className="flex gap-3">
                <Button size="sm">Grid View</Button>
                <Button size="sm" variant="secondary">Map View</Button>
              </div>
            </div>
          </Container>
        </section>
        <Container className="grid gap-8 py-10 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-4xl bg-white p-6 shadow-card">
            {[
              ['Price Range', '$150 - $850+'],
              ['Star Rating', '5 Stars, 4 Stars'],
              ['Amenities', 'Wi-Fi, Pool, Spa & Wellness'],
              ['Distance from center', 'Within 2 miles'],
            ].map(([label, value]) => (
              <div className="border-b border-line py-5 first:pt-0 last:border-none" key={label}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-500">{label}</p>
                <p className="mt-3 text-sm font-semibold text-ink-900">{value}</p>
              </div>
            ))}
          </aside>
          <section className="grid gap-6 md:grid-cols-2">
            {resultHotels.map((hotel, index) => (
              <article className="overflow-hidden rounded-4xl bg-white shadow-card" key={`${hotel.name}-${index}`}>
                <img alt="" className="h-64 w-full object-cover" src={hotel.image} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold text-brand-600">{hotel.rating}</p>
                      <h2 className="mt-1 font-display text-2xl font-extrabold tracking-[-0.05em] text-ink-900">
                        {hotel.name}
                      </h2>
                      <p className="mt-2 text-sm text-ink-500">{hotel.location}</p>
                    </div>
                    <p className="text-right text-xs font-bold uppercase text-ink-500">
                      Starting from
                      <span className="mt-1 block text-xl text-ink-900">{hotel.price}</span>
                      /night
                    </p>
                  </div>
                  <a
                    className="mt-6 inline-flex w-full justify-center rounded-full bg-brand-500 px-5 py-3 font-display text-sm font-semibold text-white shadow-glow"
                    href="/hotels/azure-sanctuary"
                  >
                    View Deal
                  </a>
                </div>
              </article>
            ))}
          </section>
        </Container>
      </main>
      <AppFooter />
    </>
  )
}
