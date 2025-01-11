import type { Meta, StoryObj } from '@storybook/react'

import { thirtyYearPlotData } from 'mocks'
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

export const NoData: Story = {
  args: {
    data: [],
    selection: [0, 100],
  },
}

export const InsufficientData: Story = {
  args: {
    data: [{ date: '2025-01-01', amount: 0, name: 'A' }],
    selection: [0, 100],
  },
}

export const OneYearDailyDeposit: Story = {
  args: {
    data: generateRandomTimeSeriesData(),
    selection: [0, 100],
  },
}

export const ThirtyYearDailyDepositCompounded: Story = {
  args: {
    data: thirtyYearPlotData,
    selection: [0, 100],
  },
}

export const OneYearOscillatingDepositFullSelection: Story = {
  args: {
    data: generateSineWaveTimeSeriesData(),
    selection: [0, 100],
  },
}

export const OneYearOscillatingDepositLowSelection: Story = {
  args: {
    data: generateSineWaveTimeSeriesData(),
    selection: [0, 50],
  },
}

export const OneYearOscillatingDepositHighSelection: Story = {
  args: {
    data: generateSineWaveTimeSeriesData(),
    selection: [50, 100],
  },
}

export const OneYearOscillatingDepositPartialSelection: Story = {
  args: {
    data: generateSineWaveTimeSeriesData(),
    selection: [25, 75],
  },
}

export const OneYearOscillatingDepositZeroSelection: Story = {
  args: {
    data: generateSineWaveTimeSeriesData(),
    selection: [0, 0],
  },
}

export const OneYearOscillatingDepositOneHundredSelection: Story = {
  args: {
    data: generateSineWaveTimeSeriesData(),
    selection: [100, 100],
  },
}
