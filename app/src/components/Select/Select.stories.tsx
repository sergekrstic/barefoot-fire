import type { Meta, StoryObj } from '@storybook/react'

import { Select as SelectComponent } from './Select.component'

const meta = {
  component: SelectComponent,
} satisfies Meta<typeof SelectComponent>

export default meta
type Story = StoryObj<typeof meta>

export const SelectSimple: Story = {
  args: {},
}
