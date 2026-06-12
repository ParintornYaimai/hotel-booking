import { cn } from '@/shared/lib/cn'

import { useBookingLocale } from '../locales'

type StepIndicatorProps = {
  active: 1 | 2 | 3
  size?: 'compact' | 'checkout'
}

export function StepIndicator({ active, size = 'compact' }: StepIndicatorProps) {
  const { steps: stepLabels } = useBookingLocale()
  const steps = [stepLabels.checkout, stepLabels.payment, stepLabels.success]
  const isCheckoutSize = size === 'checkout'

  return (
    <div className={cn('flex min-w-max items-center justify-center', isCheckoutSize ? 'gap-4 sm:gap-6' : 'gap-3')}>
      {steps.map((step, index) => {
        const number = (index + 1) as 1 | 2 | 3
        const isActive = active === number
        const isComplete = active > number
        const circleClassName = isCheckoutSize
          ? cn(
              'grid place-items-center rounded-full font-semibold tabular-nums',
              isActive
                ? 'bg-brand-600 text-white'
                : isComplete
                  ? 'bg-brand-100 text-brand-700'
                  : 'bg-[#f1f3f5] text-[#9aa0a6]',
              'size-12 text-[1.9rem] leading-none sm:size-[3.7rem] sm:text-[2rem]',
            )
          : cn(
              'grid size-8 place-items-center rounded-full text-[0.9rem] font-bold tabular-nums',
              isActive
                ? 'bg-brand-600 text-white'
                : isComplete
                  ? 'bg-brand-100 text-brand-700'
                  : 'bg-[#f1f3f5] text-[#b4bbc5]',
            )

        const labelClassName = isCheckoutSize
          ? cn(
              'text-[1.4rem] leading-none sm:text-[2rem]',
              isActive
                ? 'font-bold text-ink-900'
                : isComplete
                  ? 'font-semibold text-ink-900'
                  : 'font-medium text-[#9aa0a6]',
            )
          : isActive
            ? 'text-[0.82rem] font-semibold text-brand-700'
            : isComplete
              ? 'text-[0.82rem] font-medium text-ink-700'
              : 'text-[0.82rem] font-medium text-[#b0b4bc]'

        return (
          <div className="flex items-center gap-3" key={step}>
            <div className={cn('flex items-center', isCheckoutSize ? 'gap-4 sm:gap-5' : 'gap-2.5')}>
              <span className={circleClassName}>{number}</span>
              <span className={labelClassName}>{step}</span>
            </div>
            {index < steps.length - 1 ? (
              <span
                className={cn(
                  'block rounded-full',
                  isCheckoutSize ? 'h-px w-14 sm:w-[5.25rem] lg:w-28' : 'h-px w-10 sm:w-12',
                  isComplete ? 'bg-brand-100' : 'bg-[#e5e7eb]',
                )}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
