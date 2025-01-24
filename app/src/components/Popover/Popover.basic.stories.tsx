import type { Meta, StoryObj } from '@storybook/react'

import { PopoverBasic } from './Popover.basic.component'

const meta = {
  component: PopoverBasic,
} satisfies Meta<typeof PopoverBasic>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
