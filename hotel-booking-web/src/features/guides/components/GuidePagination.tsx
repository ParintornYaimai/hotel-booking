export function GuidePagination() {
  return (
    <nav className="mt-20 flex items-center justify-center gap-6 text-sm font-semibold text-ink-900" aria-label="Guide pagination">
      <button className="text-ink-500" type="button">
        &lt;
      </button>
      <button className="grid size-10 place-items-center rounded-full bg-brand-600 text-white" type="button">
        1
      </button>
      <button type="button">2</button>
      <button type="button">3</button>
      <span>...</span>
      <button type="button">12</button>
      <button className="text-ink-500" type="button">
        &gt;
      </button>
    </nav>
  )
}
