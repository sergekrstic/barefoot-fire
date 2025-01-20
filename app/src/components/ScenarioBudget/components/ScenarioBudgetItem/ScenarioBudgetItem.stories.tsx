import type { Meta, StoryObj } from '@storybook/react'

import { ScenarioBudgetItem } from './ScenarioBudgetItem.component'

const meta = {
  component: ScenarioBudgetItem,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ScenarioBudgetItem>

export default meta
type Story = StoryObj<typeof meta>

export const Parent: Story = {
  args: {
    type: 'parent',
    item: {
      id: '1',
      name: 'Parent Item',
      value: 1000,
    },
  },
}

export const Leaf: Story = {
  args: {
    type: 'leaf',
    item: {
      id: '2',
      name: 'Leaf Item',
      value: -500,
    },
  },
}
