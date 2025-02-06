import { EllipsisIcon } from 'assets'
import { Menu, MenuItem } from 'components'
import { BudgetType } from 'types'

export interface ScenarioBudgetMenuProps {
  showDelete?: boolean
  onAddBranch: () => void
  onDelete: () => void
  onAddBudget: (parentId: string, type: BudgetType) => void
}

export function ScenarioBudgetMenu({
  showDelete,
  onAddBranch,
  onDelete,
  onAddBudget,
}: ScenarioBudgetMenuProps): React.JSX.Element {
  // Todo: refactor these styles into a shared component
  const menuButtonClasses =
    'rounded-sm border border-transparent outline-none hover:border-slate-700 data-[open]:border-slate-600'
  const menuContainerClasses =
    'rounded-md border border-slate-300 bg-slate-200 py-1 text-slate-800 outline-none drop-shadow-lg'
  const menuItemClasses =
    'flex w-full min-w-28 items-center justify-between px-4 py-1 text-sm outline-none focus:bg-violet-600 focus:text-slate-100 disabled:text-slate-400'

  const disablePropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.stopPropagation()
  }

  return (
    <Menu
      menuButtonClasses={menuButtonClasses}
      menuContainerClasses={menuContainerClasses}
      // @ts-expect-error - Typescript error: Type 'string' is not assignable to type 'ReactNode'
      label={
        <div onClick={disablePropagation}>
          <EllipsisIcon className="flex h-5 w-5 items-center justify-center text-slate-500" size={14} />
        </div>
      }
    >
      <MenuItem className={menuItemClasses} label="Add branch" onClick={onAddBranch} />
      {showDelete && <MenuItem className={menuItemClasses} label="Delete" onClick={onDelete} />}
      <MenuItem className={menuItemClasses} label="Add budget group" onClick={() => onAddBudget('', 'group')} />
      <MenuItem className={menuItemClasses} label="Add budget item" onClick={() => onAddBudget('', 'item')} />
    </Menu>
  )
}
