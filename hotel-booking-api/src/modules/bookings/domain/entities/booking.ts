export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  checkInDate: string;
  checkOutDate: string;
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface CreateBookingInput {
  userId: string;
  hotelId: string;
  checkInDate: string;
  checkOutDate: string;
}
