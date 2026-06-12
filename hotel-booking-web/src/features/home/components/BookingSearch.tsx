import { Button } from '@/shared/ui/Button'

import { useHomeData } from '../data/home-page.data'
import { useHomeLocale } from '../locales'

export function BookingSearch() {
  const { bookingFields } = useHomeData()
  const { bookingSearch } = useHomeLocale()

  return (
    <form
      action="/stays"
      className="mx-auto mt-12 grid w-full max-w-4xl gap-2 rounded-[2rem] border border-white/20 bg-white/80 p-4 shadow-card backdrop-blur-xl md:grid-cols-[1fr_1fr_1fr_auto] md:rounded-full"
    >
      {bookingFields.map((field) => (
        <label className="flex items-center gap-3 rounded-full px-5 py-3 text-left transition hover:bg-white/75" key={field.label}>
          <span className="grid size-6 place-items-center text-sm text-brand-600">{field.icon}</span>
          <span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.05em] text-ink-700">
              {field.label}
            </span>
            <span className="mt-1 block text-sm font-semibold text-ink-900">{field.value}</span>
          </span>
        </label>
      ))}
      <Button className="min-h-14 px-9" type="submit">
        {bookingSearch.button}
      </Button>
    </form>
  )
}
