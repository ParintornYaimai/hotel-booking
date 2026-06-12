/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Locale = 'en' | 'th'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const storageKey = 'hotel-booking-web-locale'

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const queryLocale = new URLSearchParams(window.location.search).get('lang')

  if (queryLocale === 'en' || queryLocale === 'th') {
    return queryLocale
  }

  const storedLocale = window.localStorage.getItem(storageKey)

  return storedLocale === 'th' ? 'th' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale)
    document.documentElement.lang = locale === 'th' ? 'th' : 'en'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
