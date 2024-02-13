import { ComponentProps, ElementType, ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from 'common/utils'

const DEFAULT_ELEMENT = 'button' as const
const DEFAULT_STYLES =
  'inline-flex items-center justify-center rounded tracking-wide leading-none whitespace-nowrap select-none transition-all cursor-pointer disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed'
const variants = cva(DEFAULT_STYLES, {
  variants: {
    variant: {
      base: 'bg-gray-300 text-black',
      primary: 'bg-primary text-white',
      danger: 'bg-danger text-white',
    },
    size: {
      base: 'gap-2 px-8 py-4',
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'base',
  },
})

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode
  className?: string
  as?: E
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps> &
  VariantProps<typeof variants>

export const Button = <E extends ElementType = typeof DEFAULT_ELEMENT>({
  as,
  children,
  variant,
  size,
  className,
  ...rest
}: ButtonProps<E>) => {
  const classnames = cn(variants({ className, variant, size }))
  const TagName = as || DEFAULT_ELEMENT

  return (
    <TagName className={classnames} {...rest}>
      {children}
    </TagName>
  )
}
