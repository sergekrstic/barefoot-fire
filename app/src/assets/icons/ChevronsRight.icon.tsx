import { Icon, IconProps } from './IconWrapper.component'

export function ChevronsRightIcon({ size = 24 }: IconProps): React.JSX.Element {
  return (
    <Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 17 5-5-5-5" />
        <path d="m13 17 5-5-5-5" />
      </svg>
    </Icon>
  )
}
