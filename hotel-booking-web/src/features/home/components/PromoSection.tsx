import { Container } from '@/shared/ui/Container'

import { useHomeData } from '../data/home-page.data'
import { PromoCard } from './PromoCard'

export function PromoSection() {
  const { promos } = useHomeData()

  return (
    <section className="py-20">
      <Container className="grid gap-8 lg:grid-cols-2">
        {promos.map((promo) => (
          <PromoCard {...promo} key={promo.title} />
        ))}
      </Container>
    </section>
  )
}
