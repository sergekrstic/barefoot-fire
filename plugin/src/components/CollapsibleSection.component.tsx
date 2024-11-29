import { memo, useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from 'assets'

export interface CollapsibleSectionProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title?: string | React.ReactNode
  insight?: string | React.ReactNode
  children: React.ReactNode
}

export const CollapsibleSection = memo(function CollapsibleSection({
  as: Tag = 'h1',
  title,
  insight,
  children,
}: CollapsibleSectionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="fire-section-header"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <div className="fire-section-title">
          <Tag>{title}</Tag>
          <div>{insight}</div>
        </div>
        {isOpen ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
      </div>
      <div className="fire-section-content" style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  )
})
