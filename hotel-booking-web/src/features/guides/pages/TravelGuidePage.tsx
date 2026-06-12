import { AppFooter } from '@/features/home/components/AppFooter'
import { AppHeader } from '@/features/home/components/AppHeader'
import { Container } from '@/shared/ui/Container'

import { FeaturedGuideCard } from '../components/FeaturedGuideCard'
import { GuideArticleCard } from '../components/GuideArticleCard'
import { GuideFilterBar } from '../components/GuideFilterBar'
import { GuidePagination } from '../components/GuidePagination'

import { useGuidesLocale } from '../locales'

export function TravelGuidePage() {
  const guides = useGuidesLocale()

  return (
    <>
      <AppHeader />
      <main className="min-h-screen bg-[#f5f6f8] pt-16">
        <section className="pb-20 pt-20">
          <Container className="max-w-[1130px]">
            <h1 className="font-display text-5xl font-extrabold leading-tight tracking-[-0.06em] text-ink-900 md:text-6xl">
              {guides.page.titlePrefix} <span className="text-brand-600">{guides.page.titleHighlight}</span>
            </h1>

            <label className="mt-8 flex h-16 max-w-[690px] items-center gap-4 rounded-xl bg-white px-5 shadow-sm">
              <span className="text-lg text-ink-500">Q</span>
              <input
                className="w-full bg-transparent text-sm text-ink-600 outline-none placeholder:text-ink-500"
                placeholder={guides.page.searchPlaceholder}
                type="search"
              />
            </label>

            <div className="mt-20">
              <GuideFilterBar />
            </div>

            <div className="mt-16">
              <FeaturedGuideCard />
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container className="max-w-[1130px]">
            <div className="mb-10 flex items-center gap-6">
              <h2 className="shrink-0 font-display text-3xl font-extrabold tracking-[-0.05em] text-ink-900">
                {guides.page.recentTitle}
              </h2>
              <div className="h-px flex-1 bg-line" />
            </div>
            <div className="grid gap-x-9 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {guides.articles.map((post) => (
                <GuideArticleCard {...post} key={post.title} />
              ))}
            </div>
            <GuidePagination />
          </Container>
        </section>
      </main>
      <AppFooter />
    </>
  )
}
