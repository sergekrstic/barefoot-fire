import type { Meta, StoryObj } from '@storybook/react'

import { BudgetDetails } from './BudgetDetails.component'

const meta = {
  component: BudgetDetails,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BudgetDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
