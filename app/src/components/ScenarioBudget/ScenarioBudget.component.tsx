import { CollapsibleTree } from 'components'
import { MockBudget } from 'mocks'

export interface ScenarioBudgetProps {
  budget: MockBudget | null
}

export function ScenarioBudget({ budget }: ScenarioBudgetProps): React.JSX.Element {
  return (
    <div className="flex h-full w-full select-none flex-col border-l border-slate-800 bg-slate-900 text-slate-300">
      <div className="bg-slate-800 px-4 py-1 text-sm font-medium text-slate-500">Budget Details</div>
      {!budget ? (
        <div className="px-4 pb-2 pt-4 text-lg font-medium text-slate-600">{'No budget selected'}</div>
      ) : (
        <>
          <div className="px-4 pb-2 pt-4 text-lg font-medium">{budget ? budget.name : 'No budget selected'}</div>
          <CollapsibleTree
            key={budget.name}
            tree={budget.categories}
            parentContainerClasses="cursor-pointer hover:bg-slate-800 px-4"
            childContainerClasses="cursor-default px-4"
            renderCollapsibleItemContent={(item) => (
              <div className="flex flex-row py-2">
                <div className="grow">{item.name as string}</div>
                <div className="text-gray-500">{item.value as string}</div>
              </div>
            )}
            renderLeafItemContent={(item) => (
              <div className="flex flex-row py-2">
                <div className="grow">{item.name as string}</div>
                <div>{item.value as string}</div>
              </div>
            )}
          />
        </>
      )}
    </div>
  )
}
