import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'

import { images } from '../data/home-page.data'
import { useHomeLocale } from '../locales'

export function StorySection() {
  const { storySection } = useHomeLocale()

  return (
    <section className="py-16" id="travel-guides">
      <Container>
        <div className="relative overflow-hidden rounded-[3rem] px-6 py-20 text-center shadow-elevated md:px-12 md:py-28">
          <img alt="" className="absolute inset-0 size-full object-cover" src={images.ctaRoad} />
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-[-0.05em] text-white md:text-6xl">
              {storySection.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80">
              {storySection.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">
                {storySection.primaryCta}
              </Button>
              <Button className="border-2 border-white/40 bg-white/10 shadow-none backdrop-blur-md" size="lg">
                {storySection.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
