import { Container } from '@/shared/ui/Container'

import { useHomeData } from '../data/home-page.data'

export function BenefitsSection() {
  const { benefits } = useHomeData()

  return (
    <section className="bg-brand-50 py-14">
      <Container className="grid gap-8 md:grid-cols-3">
        {benefits.map((feature) => (
          <article className="text-center" key={feature.title}>
            <span className="mx-auto grid size-11 place-items-center rounded-full bg-white text-brand-600 shadow-sm">
              {feature.icon}
            </span>
            <h3 className="mt-4 font-display text-sm font-bold text-ink-900">{feature.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-ink-500">{feature.description}</p>
          </article>
        ))}
      </Container>
    </section>
  )
}
