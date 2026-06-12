import { useLocale, type Locale } from '@/shared/i18n/locale'
import { cn } from '@/shared/lib/cn'

const localeOptions: Array<{ label: string; value: Locale }> = [
  { label: 'EN', value: 'en' },
  { label: 'TH', value: 'th' },
]

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div
      aria-label="Language switcher"
      className="inline-flex rounded-full border border-line bg-white p-1 shadow-sm"
      role="group"
    >
      {localeOptions.map((option) => {
        const isActive = locale === option.value

        return (
          <button
            className={cn(
              'rounded-full px-3 py-1.5 text-[0.7rem] font-semibold transition',
              isActive ? 'bg-brand-500 text-white' : 'text-ink-500 hover:text-brand-700',
            )}
            key={option.value}
            onClick={() => setLocale(option.value)}
            type="button"
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
