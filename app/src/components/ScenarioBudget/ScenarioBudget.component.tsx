import { CollapsibleTree } from 'components'
import { useAppStore } from 'stores'
import { Scenario, TreeData } from 'types'

import { ScenarioBudgetItem } from './components'
import { EditableText } from './components/ScenarioBudgetItem/EditableText.component'

export interface ScenarioBudgetProps {
  budgetTree: Scenario | null
}

export function ScenarioBudget({ budgetTree }: ScenarioBudgetProps): React.JSX.Element {
  const updateScenarioName = useAppStore((state) => state.updateScenarioName)

  return (
    <div className="flex h-full w-full select-none flex-col bg-slate-900 text-slate-300">
      <div className="bg-slate-800 px-4 py-1 text-sm font-medium text-slate-600">Scenario Budget</div>
      {!budgetTree ? (
        <div className="px-4 pb-2 pt-4 text-lg font-medium text-slate-600">{'No budget selected'}</div>
      ) : (
        <div className="flex-grow overflow-y-auto pb-4">
          <div className="px-4 pb-2 pt-4 text-lg font-medium text-slate-500">
            <EditableText value={budgetTree.name} onChange={(value) => updateScenarioName(budgetTree.id, value)} />
          </div>
          {/* Todo: Add start/end dates from period (need to update the props to receive ScenarioBudgets types) */}
          <CollapsibleTree
            key={budgetTree.name}
            tree={budgetTree.budgets}
            expanded={true}
            parentContainerClasses="cursor-pointer hover:bg-slate-800 px-4"
            childContainerClasses="cursor-default px-4"
            renderCollapsibleItemContent={(item) => <ScenarioBudgetItem id={(item as TreeData).id} type="parent" />}
            renderLeafItemContent={(item) => <ScenarioBudgetItem id={(item as TreeData).id} type="leaf" />}
          />
        </div>
      )}
    </div>
  )
}
