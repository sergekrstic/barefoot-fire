import { Icon, IconProps } from './IconWrapper.component'

export function ChevronLeftIcon({ size = 24 }: IconProps): React.JSX.Element {
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
        // class="lucide lucide-chevron-down"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </Icon>
  )
}
