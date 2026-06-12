import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
}

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-500 text-white shadow-glow hover:-translate-y-0.5 hover:bg-brand-600',
  secondary:
    'border border-white/40 bg-white text-brand-600 shadow-sm hover:-translate-y-0.5 hover:bg-brand-50',
  ghost: 'text-ink-600 hover:bg-brand-50 hover:text-brand-700',
}

const sizeClassNames: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-10 py-[18px] text-base',
}

export function Button({
  children,
  className,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-display font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
        variantClassNames[variant],
        sizeClassNames[size],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
