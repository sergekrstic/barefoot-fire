import { EllipsisIcon } from 'assets'
import { CollapsibleTree, Menu, MenuItem } from 'components'
import { BudgetItem, BudgetTree } from 'types'

export interface ScenarioBudgetProps {
  budgetTree: BudgetTree | null
}

export function ScenarioBudget({ budgetTree }: ScenarioBudgetProps): React.JSX.Element {
  return (
    <div className="flex h-full w-full select-none flex-col bg-slate-900 text-slate-300">
      <div className="bg-slate-800 px-4 py-1 text-sm font-medium text-slate-600">Budget Details</div>
      {!budgetTree ? (
        <div className="px-4 pb-2 pt-4 text-lg font-medium text-slate-600">{'No budget selected'}</div>
      ) : (
        <div className="flex-grow overflow-y-auto pb-4">
          <div className="px-4 pb-2 pt-4 text-lg font-medium text-slate-500">{budgetTree.name}</div>
          {/* Todo: Add start/end dates from period (need to update the props to receive ScenarioBudgets types) */}
          <CollapsibleTree
            key={budgetTree.name}
            tree={budgetTree.budgets}
            expanded={true}
            parentContainerClasses="cursor-pointer hover:bg-slate-800 px-4"
            childContainerClasses="cursor-default px-4"
            renderCollapsibleItemContent={(item) => <ScenarioBudgetItem type="parent" item={item as BudgetItem} />}
            renderLeafItemContent={(item) => <ScenarioBudgetItem type="leaf" item={item as BudgetItem} />}
          />
        </div>
      )}
    </div>
  )
}

function ScenarioBudgetItem({ type, item }: { type: 'parent' | 'leaf'; item: BudgetItem }): React.JSX.Element {
  const menuButtonClasses =
    'ml-3 rounded-sm border border-transparent outline-none hover:border-slate-700 data-[open]:border-slate-600'
  const menuContainerClasses =
    'rounded-md border border-slate-300 bg-slate-200 py-1 text-slate-800 outline-none drop-shadow-lg'
  // const menuItemClasses =
  const menuItemClasses =
    'flex w-full min-w-28 items-center justify-between px-4 py-1 text-sm outline-none focus:bg-violet-600 focus:text-slate-100 disabled:text-slate-400'

  return (
    <div className="flex flex-row items-center justify-center py-2">
      <div className="grow">{item.name as string}</div>
      <div className={type === 'parent' ? 'text-gray-500' : ''}>{formatBudgetValue(item.value as number)}</div>
      <div className="flex items-center justify-center">
        <Menu
          menuButtonClasses={menuButtonClasses}
          menuContainerClasses={menuContainerClasses}
          // @ts-expect-error - Typescript error: Type 'string' is not assignable to type 'ReactNode'
          label={
            <div
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <EllipsisIcon className="flex h-5 w-5 items-center justify-center text-slate-500" size={14} />
            </div>
          }
        >
          <MenuItem className={menuItemClasses} label="Edit" disabled />
          <MenuItem className={menuItemClasses} label="Delete" disabled />
        </Menu>
      </div>
    </div>
  )
}

function formatBudgetValue(value: number): string {
  return value >= 0 ? value.toFixed(0).toString() : `(${Math.abs(value).toFixed(0)})`
}
