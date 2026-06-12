import { AppFooter } from '@/features/home/components/AppFooter'
import { AppHeader } from '@/features/home/components/AppHeader'
import { images } from '@/features/home/data/home-page.data'
import { Container } from '@/shared/ui/Container'

import { useAboutLocale } from '../locales'

export function AboutPage() {
  const about = useAboutLocale()

  return (
    <>
      <AppHeader />

      <main className="bg-[#f4f5f7] pt-16">
        <section className="relative min-h-[640px] overflow-hidden bg-ink-900">
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            src={images.glassEcho}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/45" />

          <Container className="relative flex min-h-[640px] items-center justify-center text-center text-white">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                {about.hero.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-6xl font-extrabold leading-none tracking-[-0.07em] md:text-7xl">
                {about.hero.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                {about.hero.description}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-[#f7f8fa] py-24">
          <Container className="grid gap-16 lg:grid-cols-2 lg:items-end">
            <article>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-brand-600">
                {about.purpose.eyebrow}
              </p>
              <h2 className="mt-7 max-w-md font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.07em] text-ink-900">
                {about.purpose.title}
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-ink-500">
                {about.purpose.description}
              </p>
            </article>

            <article className="lg:pb-2">
              <h2 className="font-display text-4xl font-extrabold leading-none tracking-[-0.06em] text-ink-900 md:text-5xl">
                {about.vision.title}
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-ink-500">
                {about.vision.description}
              </p>
              <blockquote className="mt-12 rounded-2xl border-l-4 border-brand-500 bg-white p-8 font-display text-base font-bold italic leading-7 text-ink-800 shadow-sm">
                {about.vision.quote}
              </blockquote>
            </article>
          </Container>
        </section>

        <section className="bg-[#eef0f3] py-20">
          <Container>
            <h2 className="text-center font-display text-4xl font-extrabold tracking-[-0.06em] text-ink-900">
              {about.standardsSection.title}
            </h2>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {about.standardsSection.items.map((standard) => (
                <article
                  className="rounded-2xl bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                  key={standard.title}
                >
                  <span className="grid size-12 place-items-center rounded-full bg-brand-50 font-display text-xs font-black text-brand-600 ring-1 ring-brand-100">
                    {standard.icon}
                  </span>
                  <h3 className="mt-9 font-display text-xl font-extrabold tracking-[-0.04em] text-ink-900">
                    {standard.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-ink-500">{standard.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {about.stats.map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-6xl font-extrabold leading-none tracking-[-0.07em] text-brand-600">
                  {value}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-ink-500">
                  {label}
                </p>
              </div>
            ))}
          </Container>
        </section>

        <section className="bg-[#f4f5f7] py-24">
          <Container>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-extrabold tracking-[-0.06em] text-ink-900">
                {about.teamSection.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-500">
                {about.teamSection.description}
              </p>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-3">
              {about.teamSection.members.map((member) => (
                <article key={member.name}>
                  <div
                    className={`relative flex aspect-[4/5] items-end overflow-hidden rounded-xl bg-gradient-to-br ${member.tone} p-8 shadow-card`}
                  >
                    <div className="absolute left-1/2 top-16 size-28 -translate-x-1/2 rounded-full bg-white/45 blur-xl" />
                    <div className="absolute inset-x-8 bottom-0 h-[72%] rounded-t-full bg-black/20" />
                    <div className="relative grid size-28 place-items-center rounded-full bg-white/90 font-display text-4xl font-extrabold tracking-[-0.08em] text-brand-700 shadow-xl">
                      {member.initials}
                    </div>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-extrabold tracking-[-0.04em] text-ink-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-brand-600">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-ink-500">{member.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f4f5f7] pb-24">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-20 text-center text-white shadow-glow md:px-10">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,102,214,0.92),rgba(0,82,183,0.94))]" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_30%_100%,rgba(4,47,119,0.8),transparent_48%),radial-gradient(ellipse_at_70%_100%,rgba(3,63,150,0.7),transparent_52%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(160deg,transparent_0_22%,rgba(6,73,151,0.78)_23%_43%,transparent_44%),linear-gradient(200deg,transparent_0_26%,rgba(8,89,177,0.7)_27%_52%,transparent_53%)]" />

              <div className="relative mx-auto max-w-xl">
                <h2 className="font-display text-5xl font-extrabold leading-[0.96] tracking-[-0.07em] md:text-6xl">
                  {about.cta.title}
                </h2>
                <a
                  className="mt-8 inline-flex rounded-full bg-white px-10 py-4 font-display text-sm font-bold text-brand-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-50"
                  href="/"
                >
                  {about.cta.button}
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <AppFooter />
    </>
  )
}
