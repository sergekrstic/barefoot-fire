import { EllipsisIcon } from 'assets'
import { Menu, MenuItem } from 'components'
import { BudgetType } from 'types'

export interface ScenarioBudgetItemMenuProps {
  type: BudgetType
  onAddItem: (type: BudgetType) => void
  onDelete: () => void
}

export function ScenarioBudgetItemMenu({ type, onAddItem, onDelete }: ScenarioBudgetItemMenuProps): React.JSX.Element {
  const menuButtonClasses =
    'ml-3 rounded-sm border border-transparent outline-none hover:border-slate-700 data-[open]:border-slate-600'
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
      {type === 'group' && (
        <>
          <MenuItem className={menuItemClasses} label="Add Item" onClick={() => onAddItem('item')} />
          <MenuItem className={menuItemClasses} label="Add Group" onClick={() => onAddItem('group')} />
        </>
      )}

      <MenuItem className={menuItemClasses} label="Delete" onClick={onDelete} />
    </Menu>
  )
}
