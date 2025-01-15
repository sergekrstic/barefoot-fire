import type { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuItem } from './DropdownMenu.component'

const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

const menuButtonClasses =
  'rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-200 hover:text-slate-900 data-[open]:bg-slate-200 data-[open]:text-slate-900'

const menuContainerClasses = 'bg-slate-200 py-1 outline-none rounded-md text-slate-800'

const menuItemClasses =
  'min-w-28 flex w-full items-center justify-between outline-none focus:bg-violet-600 focus:text-slate-100 px-4 py-1'

export const Default: Story = {
  args: {
    label: 'Menu',
    // label: <div>Hello</div>, // <-- Typescript error: Type 'string' is not assignable to type 'ReactNode'
    menuButtonClasses,
    menuContainerClasses,
    children: (
      <>
        <MenuItem className={menuItemClasses} label="Item 1" />
        <div className="px-4 py-1 text-slate-800">Non-menu item</div>
        <Menu menuContainerClasses={menuContainerClasses} menuItemClasses={menuItemClasses} label="Item 2">
          <MenuItem className={menuItemClasses} label="Sub-item 1" />
          <MenuItem className={menuItemClasses} label="Sub-item 2" />
        </Menu>
        <MenuItem className={menuItemClasses} label="Item 3" />
      </>
    ),
  },
}

/*
Original styles for example: https://codesandbox.io/p/sandbox/admiring-lamport-5wt3yg?file=%2Fsrc%2Fstyles.css%3A36%2C1-66%2C1

Not sure how to implement these styles in Tailwind CSS,
in particular the `data-[open]`, `data-[nested] and `data-[focus-inside]` attributes.
i.e.: .MenuItem[data-nested][data-open]:not([data-focus-inside]) or .MenuItem[data-focus-inside][data-open]

.MenuItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-align: left;
  line-height: 1.8;
  min-width: 110px;
  margin: 0;
  outline: 0;
}

.MenuItem:focus {
  background: var(--highlighted);
  color: white;
}

.MenuItem[data-nested][data-open]:not([data-focus-inside]) {
  background: var(--highlighted);
  color: white;
}

.MenuItem[data-focus-inside][data-open] {
  background: var(--active-unfocused);
}
*/
