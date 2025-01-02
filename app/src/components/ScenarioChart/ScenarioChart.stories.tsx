import type { Meta, StoryObj } from '@storybook/react'

import { generateRandomTimeSeriesData } from 'utils'

import { ScenarioChartV2 } from './ScenarioChart.container.v2'

const meta = {
  component: ScenarioChartV2,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ScenarioChartV2>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: generateRandomTimeSeriesData(),
  },
  render: (props) => (
    <div className="h-screen w-screen">
      <ScenarioChartV2 {...props} />
    </div>
  ),
}
