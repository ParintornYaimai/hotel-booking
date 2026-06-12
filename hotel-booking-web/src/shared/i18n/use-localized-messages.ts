import type { Locale } from '@/shared/i18n/locale'

import { useLocale } from '@/shared/i18n/locale'

type LocalizedMessages<T> = Record<Locale, T>

export function useLocalizedMessages<T>(messages: LocalizedMessages<T>) {
  const { locale } = useLocale()

  return messages[locale]
}
