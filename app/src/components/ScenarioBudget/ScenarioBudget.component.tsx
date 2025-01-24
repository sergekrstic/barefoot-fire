import { useState } from 'react'

import { CollapsibleTree, DatePicker, DateValue, EditableText } from 'components'
import { Scenario, TreeData } from 'types'

import { ScenarioBudgetMenu } from './ScenarioBudget.menu'
import { ScenarioBudgetItem } from './components'

export interface ScenarioBudgetProps {
  scenario: Scenario | null
  onAddBranch: () => void
  onUpdateScenarioName: (value: string) => void
}

export function ScenarioBudget({
  scenario,
  onAddBranch,
  onUpdateScenarioName,
}: ScenarioBudgetProps): React.JSX.Element {
  const [startDate, setStartDate] = useState<DateValue>(new Date(scenario!.startDate))
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
            <ScenarioBudgetMenu onAddBranch={onAddBranch} onDelete={() => {}} showDelete={scenario.id !== 'root'} />
          </div>
          <div className="flex px-4 pb-2">
            <DatePicker value={startDate} onChange={setStartDate} />
            <span className="px-2 text-slate-500">{`–`}</span>
            <DatePicker value={endDate} disabled />
          </div>
          <CollapsibleTree
            key={scenario.name}
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
