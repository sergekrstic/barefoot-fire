import type { Meta, StoryObj } from '@storybook/react'

import { ContextMenu, ContextMenuItem } from './ContextMenu.component'

const DummyComponent = (): null => null

const meta = {
  component: DummyComponent,
} satisfies Meta<typeof DummyComponent>

export default meta
type Story = StoryObj<typeof meta>

const itemClasses =
  'flex w-full justify-between rounded px-2 py-0.5 outline-none focus:bg-violet-600 focus:text-slate-100 active:bg-violet-600 active:text-slate-100 disabled:text-slate-400'

export const Basic: Story = {
  render: () => (
    <div>
      <p>Right click on the page!</p>
      <ContextMenu className="rounded-lg border border-slate-300 bg-slate-200 p-1 text-slate-800 outline-none drop-shadow-lg">
        <ContextMenuItem className={itemClasses} label="Back" onClick={() => console.log('Back')} />
        <ContextMenuItem className={itemClasses} label="Forward" />
        <ContextMenuItem className={itemClasses} label="Reload" disabled />
        <ContextMenuItem className={itemClasses} label="Save As..." />
        <ContextMenuItem className={itemClasses} label="Print" />
      </ContextMenu>
    </div>
  ),
}
