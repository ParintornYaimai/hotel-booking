export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  checkInDate: string;
  checkOutDate: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | string;
  createdAt: string;
}

export interface CreateBookingInput {
  userId: string;
  hotelId: string;
  checkInDate: string;
  checkOutDate: string;
}
