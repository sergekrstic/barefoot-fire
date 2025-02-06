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
    type: 'group',
    depth: 0,
    expanded: true,
    budget: {
      id: '1',
      name: 'Budget Group',
      amount: 1000,
      frequency: 'month',
      startDate: '2021-01-01',
      endDate: '2021-12-31',
    },
    onAddBudget: () => {},
    onUpdateBudget: () => {},
    onDeleteBudget: () => {},
  },
}

export const Leaf: Story = {
  args: {
    type: 'item',
    depth: 0,
    expanded: false,
    budget: {
      id: '2',
      name: 'Budget Item',
      amount: -500,
      frequency: 'month',
      startDate: '2021-01-01',
      endDate: '2021-12-31',
    },
    onAddBudget: () => {},
    onUpdateBudget: () => {},
    onDeleteBudget: () => {},
  },
}
