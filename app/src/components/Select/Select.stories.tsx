import type { Meta, StoryObj } from '@storybook/react'

import { Select as SelectBasicComponent } from './Select.basic'
import { Option, Select } from './Select.component'

const Placeholder = (): null => null

const meta = {
  component: Placeholder,
} satisfies Meta<typeof Placeholder>

export default meta
type Story = StoryObj<typeof meta>

export const SelectBasic: Story = {
  render: () => <SelectBasicComponent />,
}

export const SelectComposable: Story = {
  render: () => (
    <Select>
      <Option label="Apple" />
      <Option label="Blueberry" />
      <Option label="Watermelon" />
      <Option label="Banana" />
    </Select>
  ),
}
