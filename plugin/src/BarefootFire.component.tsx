import { memo, useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'assets'
import {
  AccountList,
  BucketList,
  BudgetsList,
  CategoryList,
  CategoryRuleList,
  CollapsibleSection,
  ConfigureApiKey,
  GroupedLabels,
  LabelList,
} from 'components'
import { usePluginStore } from 'stores'

export const BarefootFireComponent = memo(function BarefootFireComponent(): JSX.Element {
  const apiKey = usePluginStore((state) => state.pocketsmithApiKey)
  const [showContent, setShowContent] = useState(true)

  if (!apiKey) {
    return <ConfigureApiKey />
  }

  return (
    <div className="fire-container">
      <div className="fire-title">
        <h4>Barefoot FIRE</h4>
        {/* <button onMouseDown={(): void => setShowContent(true)} onMouseUp={(): void => setShowContent(false)}> */}
        <button onClick={(): void => setShowContent(!showContent)}>{showContent ? <EyeOffIcon /> : <EyeIcon />}</button>
      </div>
      {showContent && (
        <div className="fire-content">
          <CollapsibleSection title="Accounts" as="h5">
            {/* Accounts List */}
            <AccountList />
          </CollapsibleSection>
          <CollapsibleSection title="Buckets" as="h5">
            {/* Buckets List */}
            <BucketList />
          </CollapsibleSection>
          <CollapsibleSection title="Budgets" as="h5">
            {/* Budgets List */}
            <BudgetsList />
          </CollapsibleSection>
          <CollapsibleSection title="Categories" as="h5">
            {/* Categories List */}
            <CategoryList />
          </CollapsibleSection>
          <CollapsibleSection title="Category Rules" as="h5">
            {/* Category Rules List */}
            <CategoryRuleList />
          </CollapsibleSection>
          <CollapsibleSection title="Labels" as="h5">
            {/* Labels List */}
            <LabelList />
          </CollapsibleSection>
          <CollapsibleSection title="Grouped Labels" as="h5">
            {/* Grouped Labels List */}
            <GroupedLabels />
          </CollapsibleSection>
        </div>
      )}
    </div>
  )
})
