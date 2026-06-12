import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/shared/lib/cn'

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1216px] px-5 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  )
}
