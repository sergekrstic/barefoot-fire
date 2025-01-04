export interface IconProps {
  className?: string
  size?: number
}

export interface IconWrapperProps {
  className?: string
  children: React.ReactNode
}

export function Icon({ className, children }: IconWrapperProps): React.JSX.Element {
  return <div className={className || 'flex items-center justify-center'}>{children}</div>
}
