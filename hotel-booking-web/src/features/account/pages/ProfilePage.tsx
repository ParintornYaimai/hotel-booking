import { AccountPageShell } from '../components/AccountPageShell'
import {
  personalInformationFields,
  preferenceFields,
  profileSummary,
} from '../data/account-page.data'

export function ProfilePage() {
  return (
    <AccountPageShell
      activePath="/profile"
      description="Keep core identity details and travel preferences up to date so each booking flow starts with the right assumptions."
      title="Profile"
    >
      <section className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid size-16 place-items-center rounded-full bg-ink-900 font-display text-xl font-extrabold text-white">
              {profileSummary.initials}
            </div>
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink-900">
                {profileSummary.name}
              </h2>
              <p className="mt-1 text-sm text-ink-500">{profileSummary.username}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em]">
            <span className="rounded-full bg-brand-50 px-3 py-2 text-brand-700">
              {profileSummary.membership}
            </span>
            <span className="rounded-full bg-surface px-3 py-2 text-ink-500">{profileSummary.email}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-line/80 bg-surface p-5">
            <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink-900">
              Personal information
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {personalInformationFields.map(([label, value]) => (
                <label className="block" key={label}>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-ink-400">{label}</span>
                  <input
                    className="mt-2 h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-ink-700 outline-none focus:border-brand-500"
                    defaultValue={value}
                  />
                </label>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-line/80 bg-surface p-5">
            <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink-900">
              Things we should remember
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {preferenceFields.map(([label, value]) => (
                <label className="block" key={label}>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-ink-400">{label}</span>
                  <input
                    className="mt-2 h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-ink-700 outline-none focus:border-brand-500"
                    defaultValue={value}
                  />
                </label>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <label className="flex items-center gap-3 text-sm text-ink-500">
            <input className="size-4 rounded border-line" defaultChecked type="checkbox" />
            Sync profile details to future reservations
          </label>
          <div className="flex gap-3">
            <button
              className="rounded-full bg-surface px-5 py-3 text-sm font-semibold text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
              type="button"
            >
              Reset
            </button>
            <button
              className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600"
              type="button"
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </AccountPageShell>
  )
}
