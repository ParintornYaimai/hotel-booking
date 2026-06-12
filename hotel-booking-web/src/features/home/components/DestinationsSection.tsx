import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'

import { useHomeData } from '../data/home-page.data'
import { useHomeLocale } from '../locales'
import { DestinationCard } from './DestinationCard'

export function DestinationsSection() {
  const { destinations } = useHomeData()
  const { destinationsSection } = useHomeLocale()

  return (
    <section className="pb-16" id="destinations">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            description={destinationsSection.description}
            title={destinationsSection.title}
          />
          <a className="text-xs font-bold text-brand-700 transition hover:text-brand-600" href="#hotels">
            {destinationsSection.viewAll}
          </a>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard {...destination} key={destination.name} />
          ))}
        </div>
      </Container>
    </section>
  )
}
