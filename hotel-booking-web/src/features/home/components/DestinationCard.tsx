type DestinationCardProps = {
  image: string
  location?: string
  name: string
  size?: 'compact' | 'large'
  description?: string
}

export function DestinationCard({
  description,
  image,
  location,
  name,
  size = 'compact',
}: DestinationCardProps) {
  const isLarge = size === 'large'

  return (
    <article className="group text-center">
      <div
        className={`relative overflow-hidden rounded-[1.5rem] shadow-card ${
          isLarge ? 'aspect-[4/3]' : 'aspect-[4/5]'
        }`}
      >
        <img
          alt={name}
          className="size-full object-cover transition duration-500 group-hover:scale-105"
          src={image}
        />
        {!isLarge && <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />}
        {!isLarge && (
          <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
            <h3 className="font-display text-xl font-bold">{name}</h3>
            {location && <p className="mt-1 text-xs text-white/80">{location}</p>}
          </div>
        )}
      </div>
      {isLarge && (
        <div className="mt-4">
          <h3 className="font-display text-lg font-bold text-ink-900">{name}</h3>
          {description && <p className="mt-1 text-xs leading-5 text-ink-500">{description}</p>}
        </div>
      )}
    </article>
  )
}
