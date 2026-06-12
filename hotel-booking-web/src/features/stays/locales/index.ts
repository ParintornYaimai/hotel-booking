import en from './en.json'
import th from './th.json'

import { useLocalizedMessages } from '@/shared/i18n/use-localized-messages'

export function useStaysLocale() {
  return useLocalizedMessages({ en, th })
}
