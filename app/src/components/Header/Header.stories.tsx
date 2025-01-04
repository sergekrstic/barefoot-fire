import type { Meta, StoryObj } from '@storybook/react'

import { mockBudgetOne } from 'mocks'

import { Header } from './Header.component'

const meta = {
  component: Header,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    budget: mockBudgetOne,
  },
}
