import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'

import { useHomeData } from '../data/home-page.data'
import { useHomeLocale } from '../locales'
import { HotelCard } from './HotelCard'

export function FeaturedHotelsSection() {
  const { featuredHotels } = useHomeData()
  const { featuredHotelsSection } = useHomeLocale()

  return (
    <section className="py-16" id="hotels">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            description={featuredHotelsSection.description}
            title={featuredHotelsSection.title}
          />
          <div className="flex items-center gap-3">
            <button className="grid size-8 place-items-center rounded-full bg-white text-brand-600 shadow-sm" type="button">
              +
            </button>
            <button className="grid size-8 place-items-center rounded-full bg-brand-500 text-white shadow-glow" type="button">
              •
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredHotels.map((hotel) => (
            <HotelCard {...hotel} key={hotel.name} priceSuffix={featuredHotelsSection.priceSuffix} />
          ))}
        </div>
      </Container>
    </section>
  )
}
