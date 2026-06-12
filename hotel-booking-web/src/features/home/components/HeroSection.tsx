import { Container } from '@/shared/ui/Container'

import { images } from '../data/home-page.data'
import { useHomeLocale } from '../locales'
import { BookingSearch } from './BookingSearch'

export function HeroSection() {
  const { hero } = useHomeLocale()

  return (
    <section className="relative isolate flex min-h-[720px] items-center justify-center overflow-hidden px-4 pb-24 pt-28 md:min-h-[921px] md:pt-32">
      <img
        alt=""
        className="absolute inset-0 -z-20 size-full object-cover"
        src={images.hero}
      />
      <div className="image-overlay absolute inset-0 -z-10" />

      <Container className="text-center">
        <div className="mx-auto max-w-5xl animate-reveal-up">
          <h1 className="mx-auto max-w-[22rem] font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:max-w-5xl sm:text-6xl sm:leading-none lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[20rem] text-base font-medium leading-7 text-white/90 sm:max-w-2xl md:text-xl">
            {hero.description}
          </p>
        </div>

        <BookingSearch />
      </Container>
    </section>
  )
}
