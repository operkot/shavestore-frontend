import { ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from 'common/utils'

const BADGE_DEFAULT_STYLES =
  'absolute flex items-center justify-center rounded-full text-center'
const variants = cva(BADGE_DEFAULT_STYLES, {
  variants: {
    variant: {
      primary: 'bg-primary text-white',
      danger: 'bg-danger text-white',
    },
    size: {
      base: 'min-w-[18px] h-[18px] p-1 text-xs',
    },
    position: {
      'top-right': '-top-0.5 -right-0.5',
      'top-left': '-top-0.5 -left-0.5',
      'bottom-right': '-bottom-0.5 -right-0.5',
      'bottom-left': '-bottom-0.5 -left-0.5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'base',
    position: 'top-right',
  },
})

type BadgeProps = {
  children: ReactNode
  className?: string
} & VariantProps<typeof variants>

export const Badge = ({
  children,
  variant,
  size,
  position,
  className,
}: BadgeProps) => (
  <span className={cn(variants({ className, variant, size, position }))}>
    {children}
  </span>
)
