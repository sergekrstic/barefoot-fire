import type { Meta, StoryObj } from '@storybook/react'

import { ReactResizablePanels } from './ReactResizablePanels.component'

const meta = {
  component: ReactResizablePanels,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ReactResizablePanels>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
