import ctaRoadImage from '@/assets/figma/cta-road.png'
import parisImage from '@/assets/figma/destination-paris.png'
import phiPhiImage from '@/assets/figma/destination-phi-phi.png'
import santoriniImage from '@/assets/figma/destination-santorini.png'
import tokyoImage from '@/assets/figma/destination-tokyo.png'
import heroImage from '@/assets/figma/hero-sanctuary.png'
import azureBayImage from '@/assets/figma/hotel-azure-bay.png'
import glassEchoImage from '@/assets/figma/hotel-glass-echo.png'
import heritageUrbanImage from '@/assets/figma/hotel-heritage-urban.png'
import peaksImage from '@/assets/figma/nature-peaks.png'
import shoresImage from '@/assets/figma/nature-shores.png'
import waterfallsImage from '@/assets/figma/nature-waterfalls.png'
import coastalPromoImage from '@/assets/figma/promo-coastal-retreats.png'
import globalPromoImage from '@/assets/figma/promo-global-bookings.png'

import { useHomeLocale } from '../locales'

export const images = {
  azureBay: azureBayImage,
  coastalPromo: coastalPromoImage,
  ctaRoad: ctaRoadImage,
  glassEcho: glassEchoImage,
  globalPromo: globalPromoImage,
  heritageUrban: heritageUrbanImage,
  hero: heroImage,
  paris: parisImage,
  peaks: peaksImage,
  phiPhi: phiPhiImage,
  santorini: santoriniImage,
  shores: shoresImage,
  tokyo: tokyoImage,
  waterfalls: waterfallsImage,
}

type ImageKey = keyof typeof images

function withImage<T extends { imageKey: ImageKey }>(item: T) {
  return {
    ...item,
    image: images[item.imageKey],
  }
}

export function useHomeData() {
  const locale = useHomeLocale()

  return {
    benefits: locale.benefitsSection.items,
    bookingFields: locale.bookingSearch.fields,
    destinations: locale.destinationsSection.items.map(withImage),
    featuredHotels: locale.featuredHotelsSection.items.map(withImage),
    natureGetaways: locale.natureGetawaysSection.items.map(withImage),
    promos: locale.promoSection.promos.map(withImage),
  }
}
