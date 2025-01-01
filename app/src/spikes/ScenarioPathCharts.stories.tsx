import type { Meta, StoryObj } from '@storybook/react'

import { ScenarioChartV1 } from 'components'

import { Budget, Period, calculateScenarioEvents } from '@fire/forecast-engine'

const meta = {
  component: ScenarioChartV1,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScenarioChartV1>

export default meta
type Story = StoryObj<typeof meta>

const oneYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2024-12-31',
}

const tenYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2034-12-31',
}

const thirtyYearPeriod: Period = {
  startDate: '2024-01-01',
  endDate: '2054-12-31',
}

const oneYearBudget: Budget = {
  name: 'Budget 1',
  amount: 1000,
  frequency: 'year',
  startDate: '2024-01-01',
  endDate: '3034-12-31',
}

// ############################################
// One year period
// ############################################

export const OneYearYearlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [oneYearBudget],
    }),
  },
}

export const OneYearQuarterlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'quarter' }],
    }),
  },
}

export const OneYearMonthlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'month' }],
    }),
  },
}

export const OneYearWeeklyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'week' }],
    }),
  },
}

export const OneYearDailyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'day' }],
    }),
  },
}

// ############################################
// Ten year period
// ############################################

export const TenYearYearlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [oneYearBudget],
    }),
  },
}

export const TenYearQuarterlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'quarter' }],
    }),
  },
}

export const TenYearMonthlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'month' }],
    }),
  },
}

export const TenYearWeeklyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'week' }],
    }),
  },
}

export const TenYearDailyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'day' }],
    }),
  },
}

// ############################################
// Thirty year period
// ############################################

export const ThirtyYearYearlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [oneYearBudget],
    }),
  },
}

export const ThirtyYearQuarterlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'quarter' }],
    }),
  },
}

export const ThirtyYearMonthlyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'month' }],
    }),
  },
}

export const ThirtyYearWeeklyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'week' }],
    }),
  },
}

export const ThirtyYearDailyDeposit: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'day' }],
    }),
  },
}

export const FourBudgets: Story = {
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
