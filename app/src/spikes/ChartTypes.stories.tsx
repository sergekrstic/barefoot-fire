import type { Meta, StoryObj } from '@storybook/react'

import { withChartContainer } from 'storybook'

const DummyComponent = () => <div>dummy</div>

const meta = {
  component: DummyComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [withChartContainer],
} satisfies Meta<typeof DummyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const BarChart: Story = {
  args: {},
}

export const LineChart: Story = {
  args: {},
}
