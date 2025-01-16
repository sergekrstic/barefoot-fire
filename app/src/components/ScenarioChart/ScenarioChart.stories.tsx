import type { Meta, StoryObj } from '@storybook/react'

import { thirtyYearCompoundPlotData } from 'mocks'
import { generateRandomTimeSeriesData, generateSineWaveTimeSeriesData } from 'utils'

import { ScenarioChart } from './ScenarioChart.container'

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

// Todo: Ensure all the stories are correct with the new timeseries and period data
export const NoData: Story = {
  args: {
    type: 'area',
    timeseries: [],
    scenarioEvents: [],
    selection: [0, 100],
  },
}

export const InsufficientData: Story = {
  args: {
    type: 'area',
    timeseries: [{ date: '2025-01-01', amount: 0, name: 'A' }],
    scenarioEvents: [],
    selection: [0, 100],
  },
}

export const OneYearDailyDeposit: Story = {
  args: {
    type: 'area',
    timeseries: generateRandomTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 100],
  },
}

export const ThirtyYearDepositCompounded: Story = {
  args: {
    type: 'area',
    timeseries: thirtyYearCompoundPlotData,
    scenarioEvents: [],
    selection: [0, 100],
  },
}

export const OneYearOscillatingDepositFullSelection: Story = {
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 100],
  },
}

export const OneYearOscillatingDepositLowSelection: Story = {
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 50],
  },
}

export const OneYearOscillatingDepositHighSelection: Story = {
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [50, 100],
  },
}

export const OneYearOscillatingDepositPartialSelection: Story = {
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [25, 75],
  },
}

export const OneYearOscillatingDepositZeroSelection: Story = {
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 0],
  },
}

export const OneYearOscillatingDepositOneHundredSelection: Story = {
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [100, 100],
  },
}

const highlightedData = generateRandomTimeSeriesData({ name: 'highlighted', magnitude: 50 })
const pinnedData = generateRandomTimeSeriesData({ name: 'pinned', magnitude: 100 })
const pinnedOffsetData = pinnedData.map((d) => ({ ...d, amount: d.amount - 1000 }))
const data = [...highlightedData, ...pinnedOffsetData].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
)

export const DifferenceChart: Story = {
  args: {
    type: 'difference',
    timeseries: data,
    scenarioEvents: [],
    selection: [0, 100],
  },
}
