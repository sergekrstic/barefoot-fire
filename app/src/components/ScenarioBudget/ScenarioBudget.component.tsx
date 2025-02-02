import { CollapsibleTree, DatePicker, EditableText } from 'components'
import { Scenario, TreeData } from 'types'

import { ScenarioBudgetMenu } from './ScenarioBudget.menu'
import { ScenarioBudgetItem } from './components'

export interface ScenarioBudgetProps {
  scenario: Scenario | null
  onAddBranch: () => void
  onUpdateScenarioName: (value: string) => void
  onUpdateScenarioStartDate: (value: string) => void
  onDeleteScenario: () => void
}

export function ScenarioBudget({
  scenario,
  onAddBranch,
  onUpdateScenarioName,
  onUpdateScenarioStartDate,
  onDeleteScenario,
}: ScenarioBudgetProps): React.JSX.Element {
  const endDate = new Date('2035-12-31')

  return (
    <div className="flex h-full w-full select-none flex-col bg-slate-900 text-slate-300">
      <div className="bg-slate-800 px-4 py-1 text-sm font-medium text-slate-500">Scenario Budget</div>
      {!scenario ? (
        <div className="px-4 pb-2 pt-4 text-lg font-medium text-slate-500">{'No budget selected'}</div>
      ) : (
        <div className="flex-grow overflow-y-auto pb-4">
          <div className="flex items-center justify-between px-4 py-4 text-lg font-medium">
            <EditableText value={scenario.name} onChange={onUpdateScenarioName} />
            <ScenarioBudgetMenu
              onAddBranch={onAddBranch}
              onDelete={onDeleteScenario}
              showDelete={scenario.id !== 'root'}
            />
          </div>
          <div className="flex px-4 pb-2">
            <DatePicker
              value={new Date(scenario.startDate)}
              onChange={(value) => {
                // If the value is null or an array (date range), do nothing
                // Only update the scenario start date if it's a Date object
                if (!value || Array.isArray(value)) return
                onUpdateScenarioStartDate(value.toISOString().split('T')[0])
              }}
            />
            <span className="px-2 text-slate-500">{`–`}</span>
            <DatePicker value={endDate} disabled />
          </div>
          <CollapsibleTree
            key={scenario.id}
            tree={scenario.budgets}
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
