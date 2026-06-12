import { AboutPage } from '@/features/about/pages/AboutPage'
import { AccountSettingsPage } from '@/features/account/pages/AccountSettingsPage'
import { MyBookingsPage } from '@/features/account/pages/MyBookingsPage'
import { ProfilePage } from '@/features/account/pages/ProfilePage'
import { WishlistPage } from '@/features/account/pages/WishlistPage'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { RegisterPage } from '@/features/auth/pages/RegisterPage'
import { BookingSuccessPage } from '@/features/booking/pages/BookingSuccessPage'
import { CheckoutPage } from '@/features/booking/pages/CheckoutPage'
import { PaymentPage } from '@/features/booking/pages/PaymentPage'
import { ExperiencePage } from '@/features/experiences/pages/ExperiencePage'
import { TravelGuidePage } from '@/features/guides/pages/TravelGuidePage'
import { HomePage } from '@/features/home/pages/HomePage'
import { HotelDetailPage } from '@/features/stays/pages/HotelDetailPage'
import { SearchResultsPage } from '@/features/stays/pages/SearchResultsPage'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/account-settings': AccountSettingsPage,
  '/bookings': MyBookingsPage,
  '/booking-success': BookingSuccessPage,
  '/checkout': CheckoutPage,
  '/experiences': ExperiencePage,
  '/hotel-detail': HotelDetailPage,
  '/hotels/azure-sanctuary': HotelDetailPage,
  '/login': LoginPage,
  '/payment': PaymentPage,
  '/profile': ProfilePage,
  '/register': RegisterPage,
  '/stays': SearchResultsPage,
  '/travel-guides': TravelGuidePage,
  '/wishlist': WishlistPage,
}

export default function App() {
  const pathname = window.location.pathname
  const Page = routes[pathname as keyof typeof routes] ?? HomePage

  return <Page />
}
