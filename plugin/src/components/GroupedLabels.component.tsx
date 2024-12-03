import { Fragment, memo, useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from 'assets'
import { labelGroups } from './GroupedLabels.data'

export const GroupedLabels = memo(function GroupedLabels(): JSX.Element {
  return <LabelTree labelGroups={labelGroups} level={0} />
})

interface LabelTreeProps {
  labelGroups: typeof labelGroups | string[]
  level: number
}

function LabelTree({ labelGroups, level }: LabelTreeProps): JSX.Element {
  const [showNested, setShowNested] = useState<Record<string, boolean>>({})

  const toggleNested = (id: string): void => {
    setShowNested({ ...showNested, [id]: !showNested[id] })
  }

  return (
    <Fragment>
      {labelGroups.map((parent) => {
        const isParent = typeof parent === 'object'
        const title = isParent ? parent.title : parent

        return (
          <div key={title} style={{ padding: `8px 0px 0px` }}>
            {/* Display the parent */}
            {isParent && (
              <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => toggleNested(title!)}>
                <div style={{ paddingLeft: `${(level - 0) * 16}px` }} />
                {showNested[title] ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
                <div style={{ paddingLeft: '4px' }}>{title}</div>
              </div>
            )}
            {/* Display the children */}
            {isParent && (
              <div style={{ display: showNested[title] ? 'block' : 'none' }}>
                <LabelTree labelGroups={parent.children} level={level + 1} />
              </div>
            )}
            {/* Display the child */}
            {!isParent && <div style={{ paddingLeft: `${(level + 1) * 16}px` }}>{title}</div>}
          </div>
        )
      })}
    </Fragment>
  )
}
