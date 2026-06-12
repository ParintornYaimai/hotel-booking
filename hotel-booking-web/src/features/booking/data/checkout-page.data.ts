import { images } from '@/features/home/data/home-page.data'

export const checkoutContactFields = [
  { key: 'fullName', value: 'John Doe', wide: false },
  { key: 'emailAddress', value: 'john@example.com', wide: false },
  { key: 'phoneNumber', value: '+1 (555) 000-0000', wide: true },
] as const

export const checkoutSummaryFacts = [
  { icon: 'calendar', key: 'dates', value: 'Oct 12 - 19, 2024' },
  { icon: 'moon', key: 'duration', value: '7 Nights' },
  { icon: 'guests', key: 'guests', value: '2 Adults' },
] as const

export const checkoutPriceLines = [
  { amount: 2450, key: 'sevenNightStay' },
  { amount: 120, key: 'resortFee' },
  { amount: 215.4, key: 'vatTaxes' },
] as const

export const checkoutReviewStay = {
  image: images.azureBay,
  title: 'Azure Bay Resort & Spa',
} as const

export const checkoutGuestCount = 2
export const checkoutCouponCode = 'LUXENATURE20'
