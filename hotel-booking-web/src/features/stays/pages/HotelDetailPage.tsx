import { AppHeader } from '@/features/home/components/AppHeader'
import { CompactFooter } from '@/shared/ui/CompactFooter'
import { Container } from '@/shared/ui/Container'

import {
  hotelDetailAmenities,
  hotelDetailGallery,
  hotelDetailReviews,
  hotelDetailRooms,
  hotelPolicies,
  nearbyAttractions,
} from '../data/hotel-detail.data'

export function HotelDetailPage() {
  return (
    <>
      <AppHeader />
      <main className="bg-[#fbfcfe] pt-20">
        <Container className="pb-16">
          <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <img
              alt=""
              className="aspect-square w-full rounded-[1.75rem] object-cover shadow-card"
              src={hotelDetailGallery[0]}
            />
            <div className="grid grid-cols-2 gap-4">
              {hotelDetailGallery.slice(1).map((image, index) => (
                <div className="relative" key={image}>
                  <img
                    alt=""
                    className="aspect-square w-full rounded-[1.5rem] object-cover shadow-card"
                    src={image}
                  />
                  {index === 2 && (
                    <button
                      className="absolute inset-x-8 bottom-8 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900 shadow-sm"
                      type="button"
                    >
                      View all photos
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 grid gap-8 lg:grid-cols-[1fr_280px]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-luxury-amber">5.0 Star Premium Estate</p>
              <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h1 className="font-display text-4xl font-extrabold tracking-[-0.06em] text-ink-900 md:text-5xl">
                    The Azure Peak Retreat & Spa
                  </h1>
                  <p className="mt-3 text-sm text-ink-500">742 Evergreen Terrace, Sapphire Valley, Oregon, USA</p>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-ink-600">
                Nestled at the edge of the Cascade Mountains, The Azure Peak Retreat offers an unparalleled
                escape into nature without sacrificing the comforts of world-class luxury. Our estate
                features meticulously designed rooms that blend organic textures with modern architectural
                precision, signature spa treatments, and panoramic forest views.
              </p>

              <div className="mt-8">
                <h2 className="text-sm font-bold text-ink-900">What this place offers</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {hotelDetailAmenities.map((amenity) => (
                    <div className="flex items-center gap-3 text-sm text-ink-600" key={amenity}>
                      <span className="grid size-8 place-items-center rounded-full bg-surface text-ink-900">+</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-5 text-sm font-semibold text-ink-900" type="button">
                  Show all 24 amenities
                </button>
              </div>
            </div>

            <aside className="h-fit rounded-[1.5rem] bg-white p-6 shadow-elevated lg:sticky lg:top-24">
              <div className="flex items-end justify-between gap-3">
                <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-ink-900">$450</p>
                <p className="pb-1 text-sm text-ink-500">/ night</p>
              </div>
              <p className="mt-2 text-sm text-ink-500">4.9 . 128 reviews</p>
              <div className="mt-5 grid gap-3">
                {[
                  ['Check-in', '05/12/2024'],
                  ['Check-out', '05/15/2024'],
                  ['Guests', '2 Guests'],
                ].map(([label, value]) => (
                  <div className="rounded-2xl border border-line bg-white px-4 py-3" key={label}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-400">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink-900">{value}</p>
                  </div>
                ))}
              </div>
              <a
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600"
                href="/checkout"
              >
                Reserve Now
              </a>
              <p className="mt-3 text-center text-xs text-ink-400">You won&apos;t be charged yet.</p>
            </aside>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink-900">Available Rooms</h2>
            <div className="mt-5 space-y-4">
              {hotelDetailRooms.map((room) => (
                <article
                  className="grid gap-4 rounded-[1.5rem] bg-white p-4 shadow-card md:grid-cols-[170px_1fr_auto]"
                  key={room.name}
                >
                  <img alt="" className="h-32 w-full rounded-[1.25rem] object-cover" src={room.image} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-ink-900">{room.name}</h3>
                      {room.tag && (
                        <span className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700">
                          {room.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-ink-500">King bed, Rain shower, Private balcony</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {room.perks.map((perk) => (
                        <span className="rounded-full bg-surface px-3 py-2 text-xs text-ink-500" key={perk}>
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-3 md:items-end">
                    <p className="text-right">
                      <span className="text-2xl font-extrabold text-ink-900">{room.price}</span>
                      <span className="text-sm text-ink-500"> / night</span>
                    </p>
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
                      href="/checkout"
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[1.5rem] bg-white p-5 shadow-card sm:p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex items-center gap-4">
                <div className="grid size-14 place-items-center rounded-2xl bg-brand-500 font-display text-2xl font-extrabold text-white">
                  8.5
                </div>
                <div>
                  <h2 className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink-900">Exceptional</h2>
                  <p className="text-sm text-ink-500">Based on 128 verified guest reviews</p>
                </div>
              </div>
              <div className="grid gap-5 md:flex-1 md:grid-cols-2">
                {hotelDetailReviews.map((review) => (
                  <article key={review.name}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                          {review.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-ink-900">{review.name}</p>
                          <p className="text-xs text-ink-400">Stayed in April 2024</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-brand-600">{review.rating}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-ink-500">{review.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <button className="mt-6 text-sm font-semibold text-brand-600" type="button">
              Read all 128 reviews
            </button>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.5rem] bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink-900">House Policies</h2>
              <div className="mt-5 space-y-4">
                {hotelPolicies.map((policy) => (
                  <div className="border-b border-line pb-4 last:border-none last:pb-0" key={policy.title}>
                    <p className="text-sm font-semibold text-ink-900">{policy.title}</p>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{policy.description}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[1.5rem] bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink-900">Nearby Attractions</h2>
              <div className="mt-5 space-y-3">
                {nearbyAttractions.map(([title, distance]) => (
                  <div className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-none last:pb-0" key={title}>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{title}</p>
                      <p className="mt-1 text-xs text-ink-400">Local attraction</p>
                    </div>
                    <span className="text-xs font-semibold text-ink-500">{distance}</span>
                  </div>
                ))}
              </div>
              <div className="relative mt-5 overflow-hidden rounded-[1.25rem]">
                <img alt="" className="h-40 w-full object-cover" src={hotelDetailGallery[1]} />
                <button
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 shadow-sm"
                  type="button"
                >
                  Open interactive map
                </button>
              </div>
            </article>
          </section>
        </Container>
      </main>
      <CompactFooter />
    </>
  )
}
