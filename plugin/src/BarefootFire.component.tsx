import { memo, useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'assets'
import {
  AccountList,
  BucketList,
  BudgetList,
  BudgetSummary,
  BudgetTrendAnalysis,
  CategoryList,
  CategoryRuleList,
  CollapsibleSection,
  ConfigureApiKey,
  GroupedLabels,
  LabelList,
  SavedSearchesList,
  ScenarioExpenseChart,
  Status,
} from 'components'
import { usePluginStore } from 'stores'

export const BarefootFireComponent = memo(function BarefootFireComponent(): React.JSX.Element {
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
          <CollapsibleSection title="Scenario" as="h5" initialOpen>
            {/* Scenario Charts */}
            <ScenarioExpenseChart />
          </CollapsibleSection>
          <CollapsibleSection title="Status" as="h5">
            {/* Status */}
            <Status />
          </CollapsibleSection>
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
            <BudgetList />
          </CollapsibleSection>
          <CollapsibleSection title="Budget Summary" as="h5">
            {/* Budget Summary */}
            <BudgetSummary />
          </CollapsibleSection>
          <CollapsibleSection title="Budget Trend Analysis" as="h5">
            {/* Budget Trend Analysis */}
            <BudgetTrendAnalysis />
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
          <CollapsibleSection title="Saved Searches" as="h5">
            {/* Saved Searches List */}
            <SavedSearchesList />
          </CollapsibleSection>
        </div>
      )}
    </div>
  )
})
