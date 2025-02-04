import { ChevronDownIcon, ChevronRightIcon } from 'assets'
import { cn } from 'utils'

export interface CollapsibleTreeNodeProps {
  className?: string
  type: 'group' | 'item'
  depth: number
  expanded: boolean
  children?: React.ReactNode
  onClick?: () => void
}

export function CollapsibleTreeNode({
  className,
  type,
  depth,
  expanded,
  children,
  onClick,
}: CollapsibleTreeNodeProps): React.JSX.Element {
  return type === 'group' ? (
    <div className={cn('flex flex-row', className)} onClick={onClick}>
      <div style={{ paddingLeft: `${depth * 16}px` }} />
      {expanded ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
      <div className="w-full pl-2">{children}</div>
    </div>
  ) : (
    <div className={className} onClick={onClick}>
      <div style={{ paddingLeft: `${depth * (16 + 4)}px` }}>{children}</div>
    </div>
  )
}
