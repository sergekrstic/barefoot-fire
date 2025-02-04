import { Fragment, useState } from 'react'

import { TreeData } from 'types'

interface CollapsibleTreeProps {
  tree: TreeData[]
  depth?: number
  expanded?: boolean
  context?: unknown
  renderCollapsibleItemContent: (item: unknown, depth: number, expanded: boolean, context: unknown) => React.JSX.Element
  renderLeafItemContent: (item: unknown, depth: number, expanded: boolean, context?: unknown) => React.JSX.Element
}

export function CollapsibleTree({
  tree,
  depth = 0,
  expanded = false,
  context,
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
              <div onClick={() => toggleNested(item.id)}>
                {renderCollapsibleItemContent(item, depth, showNested[item.id], context)}
              </div>
            )}
            {/* Display the children */}
            {isParent && (
              <div className={showNested[item.id] ? 'block' : 'hidden'}>
                {item.children && (
                  <CollapsibleTree
                    depth={depth + 1}
                    tree={item.children}
                    context={context}
                    renderCollapsibleItemContent={renderCollapsibleItemContent}
                    renderLeafItemContent={renderLeafItemContent}
                  />
                )}
              </div>
            )}
            {/* Display the child */}
            {!isParent && <>{renderLeafItemContent(item, depth + 1, false, context)}</>}
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
