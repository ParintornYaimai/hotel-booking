import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'

import { useHomeData } from '../data/home-page.data'
import { useHomeLocale } from '../locales'
import { DestinationCard } from './DestinationCard'

export function NatureGetawaysSection() {
  const { natureGetaways } = useHomeData()
  const { natureGetawaysSection } = useHomeLocale()

  return (
    <section className="py-16" id="experiences">
      <Container>
        <SectionHeading
          align="center"
          description={natureGetawaysSection.description}
          title={natureGetawaysSection.title}
        />
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-3">
          {natureGetaways.map((item) => (
            <DestinationCard {...item} key={item.name} size="large" />
          ))}
        </div>
      </Container>
    </section>
  )
}
