import type { Meta, StoryObj } from '@storybook/react'

import { thirtyYearPlotData } from 'mocks'
import { generateRandomTimeSeriesData } from 'utils'

import { ScenarioChart } from './ScenarioChart.container.v2'

const meta = {
  component: ScenarioChart,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story): React.JSX.Element => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScenarioChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: generateRandomTimeSeriesData(),
    selection: [0, 100],
  },
}

export const ThirtyYearDailyDeposit: Story = {
  args: {
    data: thirtyYearPlotData,
    selection: [0, 100],
  },
}
