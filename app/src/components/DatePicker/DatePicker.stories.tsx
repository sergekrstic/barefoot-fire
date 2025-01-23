import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker.component'

const meta = {
  component: DatePicker,
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Native: Story = {
  args: {},
  render: (args) => <DatePicker {...args} />,
}

export const Custom: Story = {
  args: {},
}
