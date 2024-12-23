import { memo } from 'react'
import { CollapsibleTree } from 'components'
import { labelGroups, LabelGroup } from 'private'

export const GroupedLabels = memo(function GroupedLabels(): React.JSX.Element {
  return (
    <CollapsibleTree
      tree={labelGroups}
      renderCollapsibleItemContent={(item: LabelGroup) => <div>{item.title}</div>}
      renderLeafItemContent={(item: LabelGroup) => <div>{item.title}</div>}
    />
  )
})
