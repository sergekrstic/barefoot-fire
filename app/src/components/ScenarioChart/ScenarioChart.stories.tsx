import type { Meta, StoryObj } from '@storybook/react'

import { thirtyYearPlotData } from 'mocks'
import { generateRandomTimeSeriesData } from 'utils'

import { ScenarioChartV2 } from './ScenarioChart.container.v2'

const meta = {
  component: ScenarioChartV2,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story): React.JSX.Element => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScenarioChartV2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: generateRandomTimeSeriesData(),
  },
}

export const ThirtyYearDailyDeposit: Story = {
  args: { data: thirtyYearPlotData },
}
