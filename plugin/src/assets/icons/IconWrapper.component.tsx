export interface IconProps {
  size?: number
}

export interface IconWrapperProps {
  children: React.ReactNode
}

export function Icon({ children }: IconWrapperProps): JSX.Element {
  return <div className="fire-icon">{children}</div>
}
