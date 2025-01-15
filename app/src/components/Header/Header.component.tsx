import { FireIcon, MenuIcon } from 'assets'
import { Menu, MenuItem } from 'components'

export function Header(): React.JSX.Element {
  const menuButtonClasses =
    'rounded-md border border-transparent px-2 py-1 text-sm text-violet-400 outline-none hover:border-violet-500 hover:bg-violet-600 hover:text-violet-300 data-[open]:border-violet-400 data-[open]:bg-violet-600 data-[open]:text-violet-200'
  const menuContainerClasses =
    'rounded-md border border-slate-300 bg-slate-200 py-1 text-slate-800 outline-none drop-shadow-lg'
  const menuItemClasses =
    'flex w-full min-w-40 items-center justify-between px-4 py-1 text-sm outline-none focus:bg-violet-600 focus:text-slate-100'

  return (
    <div className="flex items-center border-b border-violet-600 bg-violet-900 bg-gradient-to-tr from-violet-900 to-violet-600 px-4 py-2">
      <FireIcon className="pr-2 text-violet-400 data-[open]:text-violet-200" size={20} />
      <div className="grow text-xl font-semibold tracking-widest text-violet-400">Barefoot FIRE</div>
      <Menu
        menuButtonClasses={menuButtonClasses}
        menuContainerClasses={menuContainerClasses}
        // @ts-expect-error - Typescript error: Type 'string' is not assignable to type 'ReactNode'
        label={<MenuIcon className="text-violet-400" size={20} />}
      >
        <MenuItem className={menuItemClasses} label="New" />
        <MenuItem className={menuItemClasses} label="Open" />
        <MenuItem className={menuItemClasses} label="Save" />
        <Menu menuContainerClasses={menuContainerClasses} menuItemClasses={menuItemClasses} label="Export">
          <MenuItem className={menuItemClasses} label="CSV" />
          <MenuItem className={menuItemClasses} label="JSON" />
          <MenuItem className={menuItemClasses} label="Excel" />
        </Menu>
        <Menu menuContainerClasses={menuContainerClasses} menuItemClasses={menuItemClasses} label="Examples">
          <MenuItem className={menuItemClasses} label="Simple example" />
          <MenuItem className={menuItemClasses} label="Renting vs Mortgage" />
          <MenuItem className={menuItemClasses} label="Petrol vs Hybrid vs Electric" />
          <MenuItem className={menuItemClasses} label="Median vs Professional vs Elite" />
        </Menu>
      </Menu>
    </div>
  )
}
