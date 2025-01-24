import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from './Popover.component'
import { PopoverContent } from './Popover.content'
import { PopoverTrigger } from './Popover.trigger'

const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '',
  },
  render: () => (
    <Popover>
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent>Popover content</PopoverContent>
    </Popover>
  ),
}
