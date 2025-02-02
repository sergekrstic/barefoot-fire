import { useCallback, useEffect } from 'react'

import { FireIcon, MenuIcon } from 'assets'
import { Menu, MenuItem } from 'components'
import { examples } from 'mocks'
import { useAppStore } from 'stores'
import { useFilePicker } from 'use-file-picker'

export function Header(): React.JSX.Element {
  const actions = useAppStore((state) => state.actions)
  const { openFilePicker, filesContent } = useFilePicker({ accept: '.json', multiple: false })

  useEffect(() => {
    if (filesContent.length) {
      actions.load(JSON.parse(filesContent[0].content))
    }
  }, [actions, filesContent])

  const handleSaveAs = useCallback((): void => {
    // Todo: open a file save dialog to allow to specify the file name
    actions.saveAs('barefoot_fire.json')
  }, [actions])

  const menuButtonClasses =
    'rounded-md border border-transparent px-2 py-1 text-sm text-violet-400 outline-none hover:border-violet-500 hover:bg-violet-600 hover:text-violet-300 data-[open]:border-violet-400 data-[open]:bg-violet-600 data-[open]:text-violet-200'
  const menuContainerClasses =
    'rounded-md border border-slate-300 bg-slate-200 py-1 text-slate-800 outline-none drop-shadow-lg'
  const menuItemClasses =
    'flex w-full min-w-40 items-center justify-between px-4 py-1 text-sm outline-none focus:bg-violet-600 focus:text-slate-100 disabled:text-slate-400'

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
        <MenuItem className={menuItemClasses} label="New" onClick={actions.reset} />
        <MenuItem className={menuItemClasses} label="Open" onClick={openFilePicker} />
        <MenuItem className={menuItemClasses} label="Save" onClick={handleSaveAs} />
        <Menu menuContainerClasses={menuContainerClasses} menuItemClasses={menuItemClasses} label="Export">
          <MenuItem className={menuItemClasses} label="CSV" disabled />
          <MenuItem className={menuItemClasses} label="JSON" disabled />
          <MenuItem className={menuItemClasses} label="Excel" disabled />
        </Menu>
        <Menu menuContainerClasses={menuContainerClasses} menuItemClasses={menuItemClasses} label="Examples">
          <MenuItem className={menuItemClasses} label="Simple example" onClick={() => actions.load(examples.simple)} />
          <MenuItem
            className={menuItemClasses}
            label="Detailed example"
            onClick={() => actions.load(examples.detailed)}
          />
          <MenuItem className={menuItemClasses} label="Rent vs Mortgage" disabled />
          <MenuItem className={menuItemClasses} label="Petrol vs Hybrid vs Electric" disabled />
          <MenuItem className={menuItemClasses} label="Median vs Professional vs Elite" disabled />
        </Menu>
      </Menu>
    </div>
  )
}
