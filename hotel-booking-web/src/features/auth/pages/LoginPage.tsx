import { AuthShell } from '../components/AuthShell'
import { useAuthLocale } from '../locales'

export function LoginPage() {
  const { login } = useAuthLocale()

  return (
    <AuthShell
      subtitle={login.subtitle}
      title={login.title}
    >
      <form className="mt-8 space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-ink-700">{login.fields.email}</span>
          <input
            className="mt-2 h-13 w-full rounded-2xl border border-line bg-white px-4 text-sm outline-none transition focus:border-brand-500"
            defaultValue="concierge@luxehorizon.com"
            type="email"
          />
        </label>
        <label className="block">
          <span className="flex flex-col gap-1 text-sm font-semibold text-ink-700 sm:flex-row sm:justify-between">
            {login.fields.password}
            <a className="text-brand-600" href="/login">
              {login.forgotPassword}
            </a>
          </span>
          <input
            className="mt-2 h-13 w-full rounded-2xl border border-line bg-white px-4 text-sm outline-none transition focus:border-brand-500"
            defaultValue="password"
            type="password"
          />
        </label>
        <label className="flex items-center gap-3 text-sm text-ink-600">
          <input className="size-5 rounded border-line" type="checkbox" />
          {login.keepSignedIn}
        </label>
        <button
          className="h-14 w-full rounded-full bg-brand-500 font-display font-semibold text-white shadow-glow"
          type="submit"
        >
          {login.submit}
        </button>
      </form>
      <div className="mt-8">
        <div className="relative text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
          <span className="relative z-10 bg-white px-4">{login.continueWith}</span>
          <span className="absolute inset-x-0 top-1/2 h-px bg-line" />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {login.providers.map((provider) => (
          <button className="h-12 rounded-2xl border border-line bg-white font-semibold text-ink-700" type="button">
            {provider}
          </button>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-ink-500">
        {login.footer.prompt}{' '}
        <a className="font-semibold text-brand-600" href="/register">
          {login.footer.link}
        </a>
      </p>
    </AuthShell>
  )
}
