import type { Meta, StoryObj } from '@storybook/react'

import { mockBudgetCategoriesForScenarioOne } from 'mocks'

import { ScenarioBudget } from './ScenarioBudget.component'

const meta = {
  component: ScenarioBudget,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ScenarioBudget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    budget: mockBudgetCategoriesForScenarioOne,
  },
}
