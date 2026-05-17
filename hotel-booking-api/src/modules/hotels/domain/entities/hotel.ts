export interface Hotel {
  id: string;
  name: string;
  slug: string | null;
  destinationName: string | null;
  province: string | null;
  country: string | null;
  starRating: number | null;
  rating: number | null;
  status: string | null;
}
