import { cn } from '@/shared/lib/cn'

import { AccountPageShell } from '../components/AccountPageShell'
import {
  notificationSettings,
  preferenceSettings,
  securitySettings,
} from '../data/account-page.data'

function SettingToggle({ enabled }: { enabled: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex h-7 w-12 items-center rounded-full p-1 transition',
        enabled ? 'bg-brand-500 justify-end' : 'bg-ink-100 justify-start',
      )}
    >
      <span className="size-5 rounded-full bg-white shadow-sm" />
    </span>
  )
}

export function AccountSettingsPage() {
  return (
    <AccountPageShell
      activePath="/account-settings"
      description="Control notifications, travel defaults, and sign-in protection without leaving the account center."
      title="Account Settings"
    >
      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <article className="rounded-[1.75rem] bg-white p-6 shadow-card">
            <h2 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink-900">
              Notifications
            </h2>
            <div className="mt-5 space-y-4">
              {notificationSettings.map((item) => (
                <div
                  className="flex items-start justify-between gap-4 rounded-2xl border border-line/70 bg-surface p-4"
                  key={item.label}
                >
                  <div>
                    <p className="font-semibold text-ink-900">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-ink-500">{item.description}</p>
                  </div>
                  <SettingToggle enabled={item.enabled} />
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-white p-6 shadow-card">
            <h2 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink-900">
              Preferences
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {preferenceSettings.map((item) => (
                <label className="block" key={item.label}>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-ink-400">{item.label}</span>
                  <select className="mt-2 h-12 w-full rounded-2xl border border-line bg-surface px-4 text-sm text-ink-700 outline-none focus:border-brand-500" defaultValue={item.value}>
                    <option>{item.value}</option>
                  </select>
                </label>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-5">
          <article className="rounded-[1.75rem] bg-white p-6 shadow-card">
            <h2 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink-900">
              Security
            </h2>
            <div className="mt-5 space-y-4">
              {securitySettings.map((item) => (
                <div
                  className="flex items-start justify-between gap-4 rounded-2xl border border-line/70 bg-surface p-4"
                  key={item.label}
                >
                  <div>
                    <p className="font-semibold text-ink-900">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-ink-500">{item.description}</p>
                  </div>
                  <SettingToggle enabled={item.enabled} />
                </div>
              ))}
            </div>
            <button className="mt-5 text-sm font-semibold text-brand-600 transition hover:text-brand-700" type="button">
              Change password
            </button>
          </article>

          <article className="rounded-[1.75rem] border border-rose-100 bg-[#fff8f7] p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-rose-500">Danger zone</p>
            <h2 className="mt-3 font-display text-xl font-extrabold tracking-[-0.03em] text-ink-900">
              Delete account
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              Permanently remove profile details, saved stays, and traveler preferences from this workspace.
            </p>
            <button
              className="mt-5 rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
              type="button"
            >
              Delete Account
            </button>
          </article>
        </div>
      </section>

      <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
        <button
          className="rounded-full bg-surface px-5 py-3 text-sm font-semibold text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
          type="button"
        >
          Reset changes
        </button>
        <button
          className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600"
          type="button"
        >
          Save Preferences
        </button>
      </div>
    </AccountPageShell>
  )
}
