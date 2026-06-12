import { AppFooter } from '@/features/home/components/AppFooter'
import { AppHeader } from '@/features/home/components/AppHeader'
import { images } from '@/features/home/data/home-page.data'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'

import { useExperiencesLocale } from '../locales'

export function ExperiencePage() {
  const experiences = useExperiencesLocale()
  const highlightCards = experiences.highlights.map((item) => ({
    ...item,
    image: images[item.imageKey as keyof typeof images],
  }))
  const collectionCards = experiences.collectionSection.items.map((item) => ({
    ...item,
    image: images[item.imageKey as keyof typeof images],
  }))

  return (
    <>
      <AppHeader />
      <main className="bg-surface pt-16">
        <section className="relative isolate overflow-hidden px-5 py-24 text-white md:py-32">
          <img alt="" className="absolute inset-0 -z-20 size-full object-cover" src={images.peaks} />
          <div className="absolute inset-0 -z-10 bg-ink-900/70" />
          <Container className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">{experiences.hero.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-extrabold leading-tight tracking-[-0.06em] md:text-7xl">
              {experiences.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
              {experiences.hero.description}
            </p>
            <form className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-[2rem] bg-white/90 p-4 text-left text-ink-900 shadow-card md:grid-cols-[1fr_1fr_1fr_auto] md:rounded-full">
              {experiences.hero.searchFields.map((field) => (
                <label className="rounded-full px-5 py-3" key={label}>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-ink-500">
                    {field.label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    {field.value}
                  </span>
                </label>
              ))}
              <Button>{experiences.hero.searchButton}</Button>
            </form>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="flex flex-wrap gap-3">
              {experiences.filters.map((filter, index) => (
                <button
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    index === 0 ? 'bg-brand-500 text-white' : 'bg-white text-ink-600 shadow-sm'
                  }`}
                  type="button"
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {highlightCards.map((item) => (
                <article className="overflow-hidden rounded-4xl bg-white shadow-card" key={item.title}>
                  <img alt="" className="h-72 w-full object-cover" src={item.image} />
                  <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                      {item.badge}
                    </span>
                    <p className="mt-3 text-sm text-ink-500">{item.location}</p>
                    <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.05em] text-ink-900">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-ink-500">
                      {experiences.highlightDescription}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm text-ink-500">
                        {experiences.highlightPricePrefix}{' '}
                        <span className="font-bold text-ink-900">{item.price}</span>{' '}
                        {experiences.highlightPriceSuffix}
                      </p>
                      <a className="font-bold text-brand-600" href="/stays">
                        {experiences.highlightLink}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{experiences.collectionSection.eyebrow}</p>
                <h2 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.05em] text-ink-900">
                  {experiences.collectionSection.title}
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {collectionCards.map((destination) => (
                <article className="overflow-hidden rounded-4xl bg-white shadow-card" key={destination.name}>
                  <img alt="" className="h-48 w-full object-cover" src={destination.image} />
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase text-brand-600">{destination.location}</p>
                    <h3 className="mt-2 font-display text-lg font-bold text-ink-900">{destination.name}</h3>
                    <p className="mt-4 text-sm font-bold text-ink-900">{destination.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-brand-900 py-20 text-center text-white">
          <Container>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.05em]">
              {experiences.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              {experiences.cta.description}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="secondary">{experiences.cta.primary}</Button>
              <Button className="bg-white/10 shadow-none">{experiences.cta.secondary}</Button>
            </div>
          </Container>
        </section>
      </main>
      <AppFooter />
    </>
  )
}
