type HotelCardProps = {
  image: string
  location: string
  name: string
  price: string
  priceSuffix: string
  rating: string
}

export function HotelCard({ image, location, name, price, priceSuffix, rating }: HotelCardProps) {
  return (
    <article className="overflow-hidden rounded-4xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img alt={name} className="size-full object-cover" src={image} />
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-900">
          {rating}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-bold text-ink-900">{name}</h3>
        <p className="mt-2 text-xs text-ink-500">{location}</p>
        <p className="mt-6">
          <span className="text-xl font-extrabold text-ink-900">{price}</span>
          <span className="text-xs font-semibold text-ink-500"> {priceSuffix}</span>
        </p>
      </div>
    </article>
  )
}
