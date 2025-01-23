import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker.component'

const meta = {
  component: DatePicker,
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Custom: Story = {
  args: { value: new Date() },
}

export const Native: Story = {
  args: Custom.args,
  render: () => (
    <div>
      <input type="date" />
    </div>
  ),
}
