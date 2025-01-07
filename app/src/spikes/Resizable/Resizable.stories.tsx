import type { Meta, StoryObj } from '@storybook/react'

import { Resizable } from './Resizable.component'

const meta = {
  component: Resizable,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story): React.JSX.Element => (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Resizable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    axis: 'x',
    min: 150,
    children: ({ position, separatorProps }) => (
      <div className="flex h-full w-full overflow-hidden">
        <div
          className="flex items-center justify-center bg-violet-950 text-2xl text-violet-600"
          style={{ width: position }}
        >
          Panel 1
        </div>
        <div className="h-full w-1 cursor-col-resize bg-violet-600" {...separatorProps} />
        <div className="flex grow items-center justify-center bg-violet-950 text-2xl text-violet-600">Panel 2</div>
      </div>
    ),
  },
}
