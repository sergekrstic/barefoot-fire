import { Fragment, useId, useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from 'assets'

export interface TreeData {
  id?: number
  title?: string
  children?: TreeData[]
}

interface CollapsibleTreeProps {
  tree: TreeData[]
  level?: number
  context?: unknown
  renderCollapsibleItemContent: (item: unknown, context?: unknown) => React.JSX.Element
  renderLeafItemContent: (item: unknown, context?: unknown) => React.JSX.Element
}

export function CollapsibleTree({
  tree,
  level = 0,
  context,
  renderCollapsibleItemContent,
  renderLeafItemContent,
}: CollapsibleTreeProps): React.JSX.Element {
  const [showNested, setShowNested] = useState<Record<string, boolean>>({})

  const toggleNested = (id: string): void => {
    setShowNested({ ...showNested, [id]: !showNested[id] })
  }

  return (
    <Fragment>
      {tree.map((item) => {
        const resolvedId = item.id?.toString() || useId()
        const isParent = item.children && item.children.length > 0

        return (
          <div key={resolvedId} style={{ padding: `8px 0px 0px` }}>
            {/* Display the parent */}
            {isParent && (
              <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => toggleNested(resolvedId)}>
                <div style={{ paddingLeft: `${(level - 0) * 16}px` }} />
                {showNested[resolvedId] ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
                <div style={{ paddingLeft: '4px' }}>{renderCollapsibleItemContent(item, context)}</div>
              </div>
            )}
            {/* Display the children */}
            {isParent && (
              <div style={{ display: showNested[resolvedId] ? 'block' : 'none' }}>
                {item.children && (
                  <CollapsibleTree
                    level={level + 1}
                    tree={item.children}
                    context={context}
                    renderCollapsibleItemContent={renderCollapsibleItemContent}
                    renderLeafItemContent={renderLeafItemContent}
                  />
                )}
              </div>
            )}
            {/* Display the child */}
            {!isParent && (
              <div style={{ paddingLeft: `${(level + 1) * (16 + 4)}px` }}>{renderLeafItemContent(item, context)}</div>
            )}
          </div>
        )
      })}
    </Fragment>
  )
}
