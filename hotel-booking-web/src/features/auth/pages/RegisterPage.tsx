import { AuthShell } from '../components/AuthShell'
import { useAuthLocale } from '../locales'

export function RegisterPage() {
  const { register } = useAuthLocale()

  return (
    <AuthShell subtitle={register.subtitle} title={register.title}>
      <form className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-ink-700">{register.fields.firstName}</span>
            <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" placeholder={register.placeholders.firstName} />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-ink-700">{register.fields.lastName}</span>
            <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" placeholder={register.placeholders.lastName} />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-semibold text-ink-700">{register.fields.email}</span>
          <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" placeholder={register.placeholders.email} type="email" />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-ink-700">{register.fields.password}</span>
            <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" type="password" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-ink-700">{register.fields.confirmPassword}</span>
            <input className="mt-2 h-13 w-full rounded-2xl border border-line px-4 text-sm outline-none focus:border-brand-500" type="password" />
          </label>
        </div>
        <label className="flex items-start gap-3 text-sm leading-6 text-ink-600">
          <input className="mt-1 size-5 rounded border-line" type="checkbox" />
          {register.agreement}
        </label>
        <button className="h-14 w-full rounded-full bg-brand-500 font-display font-semibold text-white shadow-glow" type="submit">
          {register.submit}
        </button>
      </form>
      <button className="mt-6 h-12 w-full rounded-2xl border border-line bg-white font-semibold text-ink-700" type="button">
        {register.google}
      </button>
      <p className="mt-8 text-center text-sm text-ink-500">
        {register.footer.prompt}{' '}
        <a className="font-semibold text-brand-600" href="/login">
          {register.footer.link}
        </a>
      </p>
    </AuthShell>
  )
}
