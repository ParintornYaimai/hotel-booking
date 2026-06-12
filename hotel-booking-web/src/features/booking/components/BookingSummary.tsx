import { useBookingLocale } from '../locales'

export function BookingSummary() {
  const { summaryCard } = useBookingLocale()

  return (
    <aside className="h-fit rounded-4xl bg-white p-6 shadow-elevated">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">{summaryCard.badge}</p>
      <h2 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.05em] text-ink-900">
        {summaryCard.title}
      </h2>
      <p className="mt-2 text-sm text-ink-500">{summaryCard.location}</p>
      <div className="mt-6 space-y-3 rounded-3xl bg-surface p-5 text-sm">
        {summaryCard.stayFacts.map(([label, value]) => (
          <p className="flex justify-between gap-4" key={label}>
            <span>{label}</span>
            <span className="font-semibold">{value}</span>
          </p>
        ))}
      </div>
      <div className="mt-6 space-y-3 text-sm text-ink-500">
        {summaryCard.priceLines.map(([label, value]) => (
          <p className="flex justify-between gap-4" key={label}>
            <span>{label}</span>
            <span>{value}</span>
          </p>
        ))}
        <p className="flex justify-between border-t border-line pt-4 text-lg font-extrabold text-ink-900">
          <span>{summaryCard.totalPrice}</span>
          <span>{summaryCard.totalValue}</span>
        </p>
      </div>
    </aside>
  )
}
