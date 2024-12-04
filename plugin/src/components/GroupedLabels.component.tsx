import { memo } from 'react'
import { labelGroups, LabelGroup } from 'private'
import { CollapsibleTree } from './CollapsibleTree.component'

export const GroupedLabels = memo(function GroupedLabels(): JSX.Element {
  return (
    <CollapsibleTree
      tree={labelGroups}
      renderCollapsibleItemContent={(item: LabelGroup) => <div>{item.title}</div>}
      renderLeafItemContent={(item: LabelGroup) => <div>{item.title}</div>}
    />
  )
})
