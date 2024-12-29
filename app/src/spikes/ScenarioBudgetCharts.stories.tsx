import type { Meta, StoryObj } from '@storybook/react'

import { ScenarioChart } from 'components'

import { calculateScenarioEvents } from '@fire/forecast-engine'

const meta = {
  component: ScenarioChart,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ScenarioChart>

export default meta
type Story = StoryObj<typeof meta>

export const DotPlot: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: {
        startDate: '2024-01-01',
        endDate: '2024-12-31',
      },
      budgets: [
        {
          name: 'Budget 1',
          amount: 1000,
          frequency: 'year',
          startDate: '2024-01-01',
          endDate: '2034-12-31',
        },
        {
          name: 'Budget 2',
          amount: 100,
          frequency: 'week',
          startDate: '2024-01-01',
          endDate: '2034-12-31',
        },
        {
          name: 'Budget 33',
          amount: 10,
          frequency: 'day',
          startDate: '2024-01-01',
          endDate: '2034-12-31',
        },
        {
          name: 'Budget 4',
          amount: 10,
          frequency: 'day',
          startDate: '2024-01-01',
          endDate: '2034-12-31',
        },
      ],
    }),
  },
}
