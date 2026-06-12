import { images } from '@/features/home/data/home-page.data'

export const hotelDetailGallery = [
  images.hero,
  images.azureBay,
  images.glassEcho,
  images.heritageUrban,
] as const

export const hotelDetailAmenities = [
  'Infinity Pool',
  'Fitness Center',
  'Fine Dining',
  'Luxury Spa',
  'Gigabit WiFi',
  'Free Valet',
] as const

export const hotelDetailRooms = [
  {
    image: images.glassEcho,
    name: 'Deluxe Forest View',
    perks: ['2 Adults', 'Free WiFi', 'Breakfast incl.'],
    price: '$450',
    tag: 'Top seller',
  },
  {
    image: images.peaks,
    name: 'Azure Executive Suite',
    perks: ['2 Adults', 'Mini bar', 'Butler service'],
    price: '$820',
    tag: null,
  },
  {
    image: images.azureBay,
    name: 'Standard Garden Wing',
    perks: ['2 Adults', 'Workspace'],
    price: '$310',
    tag: null,
  },
] as const

export const hotelDetailReviews = [
  {
    initials: 'JS',
    name: 'Julian Schmidt',
    rating: '9.5',
    text:
      'The views are simply breathtaking. We stayed in the Forest Suite and woke up to the most incredible sunrise over the valley.',
  },
  {
    initials: 'EM',
    name: 'Elena Martinez',
    rating: '8.0',
    text:
      'Beautiful architecture and very clean rooms. The restaurant was a bit busy during breakfast, but I would still recommend going early.',
  },
] as const

export const hotelPolicies = [
  {
    description: 'Check-in from 3:00 PM to 10:00 PM. Check-out before 11:00 AM.',
    title: 'Check-in / Check-out',
  },
  {
    description: 'Free cancellation up to 48 hours before arrival. After that, 50% of the first night will be charged.',
    title: 'Cancellation',
  },
  {
    description: 'This is a strictly non-smoking property. Deep cleaning fees apply.',
    title: 'Smoking',
  },
] as const

export const nearbyAttractions = [
  ['Crystal Falls Hiking Trail', '1.2 km'],
  ['Valley Village Center', '3.5 km'],
  ['Sapphire Lake Marina', '5.8 km'],
  ['Mount Peak Observatory', '12.4 km'],
] as const
