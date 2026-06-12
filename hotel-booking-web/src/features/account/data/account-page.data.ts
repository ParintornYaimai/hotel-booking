import { images } from '@/features/home/data/home-page.data'

export const accountTabs = [
  { href: '/bookings', label: 'My Bookings' },
  { href: '/wishlist', label: 'Wishlist' },
  { href: '/profile', label: 'Profile' },
  { href: '/account-settings', label: 'Account Settings' },
] as const

export const bookingStats = [
  { label: 'Active trips', value: '4' },
  { label: 'Saved stays', value: '12' },
  { label: 'Open requests', value: '2' },
] as const

export const bookings = [
  {
    ctaHref: '/hotels/azure-sanctuary',
    ctaLabel: 'View stay',
    dates: 'Oct 24 - Oct 31, 2026',
    guests: '2 guests',
    image: images.santorini,
    location: 'Amalfi Coast, Italy',
    nights: '7 nights',
    price: '$3,420.00',
    reference: 'LS-20415',
    status: 'Upcoming',
    title: 'The Azure Sanctuary',
  },
  {
    ctaHref: '/checkout',
    ctaLabel: 'Manage booking',
    dates: 'Nov 08 - Nov 11, 2026',
    guests: '2 guests',
    image: images.glassEcho,
    location: 'Zermatt, Switzerland',
    nights: '3 nights',
    price: '$1,980.00',
    reference: 'LS-20468',
    status: 'Reserved',
    title: 'Nordic Glass Cabin',
  },
  {
    ctaHref: '/hotels/azure-sanctuary',
    ctaLabel: 'View itinerary',
    dates: 'Dec 18 - Dec 24, 2026',
    guests: '4 guests',
    image: images.heritageUrban,
    location: 'Kyoto, Japan',
    nights: '6 nights',
    price: '$6,900.00',
    reference: 'LS-20990',
    status: 'Confirmed',
    title: 'The Dawn Alpine Resort',
  },
  {
    ctaHref: '/travel-guides',
    ctaLabel: 'Plan add-ons',
    dates: 'Jan 14 - Jan 18, 2027',
    guests: '2 guests',
    image: images.azureBay,
    location: 'Phuket, Thailand',
    nights: '4 nights',
    price: '$4,050.00',
    reference: 'LS-21422',
    status: 'Upcoming',
    title: 'Santorini Moments',
  },
  {
    ctaHref: '/experiences',
    ctaLabel: 'Explore activities',
    dates: 'Feb 02 - Feb 08, 2027',
    guests: '3 guests',
    image: images.shores,
    location: 'Bora Bora, French Polynesia',
    nights: '6 nights',
    price: '$9,250.00',
    reference: 'LS-21817',
    status: 'Premium',
    title: 'Azure Overwater Villa',
  },
] as const

export const wishlistStays = [
  {
    image: images.azureBay,
    location: 'Amalfi Coast, Italy',
    price: 'EUR 2,680',
    title: 'Azure Clifftop Villa',
  },
  {
    image: images.glassEcho,
    location: 'Swiss Alps',
    price: 'EUR 980',
    title: 'Arctic Reflection Lodge',
  },
  {
    image: images.heritageUrban,
    location: 'Prague, Czech Republic',
    price: 'EUR 1,120',
    title: 'Panoramic Ridge Retreat',
  },
  {
    image: images.paris,
    location: 'Venice, Italy',
    price: 'EUR 710',
    title: 'Canal House Loft',
  },
  {
    image: images.peaks,
    location: 'Patagonia, Chile',
    price: 'EUR 1,300',
    title: 'Elevated Ridge Chalet',
  },
  {
    image: images.tokyo,
    location: 'Tokyo, Japan',
    price: 'EUR 2,110',
    title: 'Urban Night Capsule',
  },
] as const

export const profileSummary = {
  email: 'julian.montgomery@luxestay.com',
  initials: 'JM',
  membership: 'Platinum Explorer',
  name: 'Julian Montgomery',
  username: '@julianmontgomery',
} as const

export const personalInformationFields = [
  ['Full name', 'Julian Montgomery'],
  ['Email', 'julian.montgomery@luxestay.com'],
  ['Phone number', '+1 (415) 555-0138'],
  ['Preferred communication', 'WhatsApp and email'],
] as const

export const preferenceFields = [
  ['Favorite escape', 'Coastal retreats'],
  ['Preferred destination', 'Mediterranean islands'],
  ['Travel style', 'Design-led luxury'],
  ['Concierge note', 'Private transfers and late check-in'],
] as const

export const notificationSettings = [
  {
    description: 'Receive check-in reminders and itinerary updates.',
    enabled: true,
    label: 'Reservation alerts',
  },
  {
    description: 'Get tailored offers based on your saved stays and searches.',
    enabled: true,
    label: 'Marketing updates',
  },
  {
    description: 'Turn on proactive messages from your assigned concierge.',
    enabled: false,
    label: 'Concierge follow-ups',
  },
] as const

export const preferenceSettings = [
  { label: 'Currency', value: 'EUR' },
  { label: 'Language', value: 'English' },
  { label: 'Time zone', value: 'Bangkok (UTC+7)' },
] as const

export const securitySettings = [
  {
    description: 'Add an extra verification step whenever you sign in.',
    enabled: false,
    label: '2-step verification',
  },
  {
    description: 'Allow new device sign-ins only after email confirmation.',
    enabled: true,
    label: 'New device approval',
  },
] as const
