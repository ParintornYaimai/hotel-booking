import { useGuidesLocale } from '../locales'

export function GuideFilterBar() {
  const { filters } = useGuidesLocale()

  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter, index) => (
        <button
          className={`rounded-full px-6 py-2.5 text-xs font-semibold ${
            index === 0 ? 'bg-brand-600 text-white' : 'bg-ink-100/70 text-ink-900'
          }`}
          key={filter}
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
