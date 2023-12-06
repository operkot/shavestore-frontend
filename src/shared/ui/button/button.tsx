import { ReactNode, ElementType, HTMLAttributes } from 'react'
import { cn } from 'shared/lib'

interface ButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
  className?: string
  children?: ReactNode
  disabled?: boolean
  href?: string
  type?: string
  variant?: 'base' | 'primary' | 'danger'
  onClick?: () => void
}

const BUTTON_DEFAULT_STYLES =
  'inline-flex items-center justify-center px-8 py-4 rounded-lg tracking-wide leading-none whitespace-nowrap select-none transition-all cursor-pointer disabled:cursor-not-allowed'

function buttonVarinatsStyles(variant: string) {
  return {
    base: 'bg-gray-300 text-black',
    primary: 'bg-cyan-500 text-white disabled:bg-gray-200',
    danger: 'bg-red-500 text-white disabled:bg-gray-200',
  }[variant]
}

export function Button({
  as: Tag = 'button',
  className,
  children,
  disabled,
  href,
  type = 'button',
  variant = 'base',
  onClick,
}: ButtonProps) {
  const buttonType = Tag === 'button' ? type : undefined
  const buttonHref = Tag === 'a' ? href : undefined

  return (
    <Tag
      disabled={disabled}
      className={cn(
        BUTTON_DEFAULT_STYLES,
        buttonVarinatsStyles(variant),
        className
      )}
      href={buttonHref}
      type={buttonType}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
