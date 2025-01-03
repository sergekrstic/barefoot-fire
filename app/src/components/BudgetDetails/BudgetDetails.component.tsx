import { CollapsibleTree } from 'components'
import { mockBudgetOne } from 'mocks'

export function BudgetDetails(): React.JSX.Element {
  return (
    <div className="p-4x flex h-full w-full select-none flex-col border-l border-slate-800 bg-slate-900 text-slate-300">
      <div className="bg-slate-800 px-4 py-1 text-sm font-medium text-slate-500">Budget Details</div>
      <div className="px-4 pb-2 pt-4 text-lg font-medium">Job 1</div>
      <CollapsibleTree
        tree={mockBudgetOne}
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
    </div>
  )
}
