import { Fragment, useState } from 'react'

import { ChevronDownIcon, ChevronRightIcon } from 'assets'
import { TreeData } from 'types'

interface CollapsibleTreeProps {
  tree: TreeData[]
  level?: number
  expanded?: boolean
  context?: unknown
  parentContainerClasses?: string
  childContainerClasses?: string
  renderCollapsibleItemContent: (item: TreeData, context: unknown) => React.JSX.Element
  renderLeafItemContent: (item: TreeData, context?: unknown) => React.JSX.Element
}

export function CollapsibleTree({
  tree,
  level = 0,
  expanded = false,
  context,
  parentContainerClasses,
  childContainerClasses,
  renderCollapsibleItemContent,
  renderLeafItemContent,
}: CollapsibleTreeProps): React.JSX.Element {
  const [showNested, setShowNested] = useState<Record<string, boolean>>(() => populateShowNested(tree, expanded))

  const toggleNested = (id: string): void => {
    setShowNested({ ...showNested, [id]: !showNested[id] })
  }

  return (
    <Fragment>
      {tree.map((item) => {
        const isParent = item.children && item.children.length > 0

        return (
          <div key={item.id}>
            {/* Display the parent */}
            {isParent && (
              <div className={`flex flex-row ${parentContainerClasses}`} onClick={() => toggleNested(item.id)}>
                <div style={{ paddingLeft: `${(level - 0) * 16}px` }} />
                {showNested[item.id] ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
                <div className="w-full pl-2">{renderCollapsibleItemContent(item, context)}</div>
              </div>
            )}
            {/* Display the children */}
            {isParent && (
              <div className={showNested[item.id] ? 'block' : 'hidden'}>
                {item.children && (
                  <CollapsibleTree
                    level={level + 1}
                    tree={item.children}
                    context={context}
                    parentContainerClasses={parentContainerClasses}
                    childContainerClasses={childContainerClasses}
                    renderCollapsibleItemContent={renderCollapsibleItemContent}
                    renderLeafItemContent={renderLeafItemContent}
                  />
                )}
              </div>
            )}
            {/* Display the child */}
            {!isParent && (
              <div className={childContainerClasses}>
                <div style={{ paddingLeft: `${(level + 1) * (16 + 4)}px` }}>{renderLeafItemContent(item, context)}</div>
              </div>
            )}
          </div>
        )
      })}
    </Fragment>
  )
}

// Recursively populate the showNested state to the default value of true
function populateShowNested(tree: TreeData[], initialValue: boolean): Record<string, boolean> {
  return tree.reduce(
    (acc, item) => {
      acc[item.id] = initialValue
      if (item.children) {
        acc = { ...acc, ...populateShowNested(item.children, initialValue) }
      }
      return acc
    },
    {} as Record<string, boolean>,
  )
}
