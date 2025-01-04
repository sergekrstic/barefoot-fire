import type { Meta, StoryObj } from '@storybook/react'

import { ScenarioChartV1 } from 'components'

import { Budget, Period, calculateScenarioEvents } from '@fire/forecast-engine'

const meta = {
  component: ScenarioChartV1,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story): React.JSX.Element => (
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
  ...thirtyYearPeriod,
}

// ############################################
// One year period
// ############################################

export const OneYearYearlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [oneYearBudget],
    }),
  },
}

export const OneYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'quarter' }],
    }),
  },
}

export const OneYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'month' }],
    }),
  },
}

export const OneYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'week' }],
    }),
  },
}

export const OneYearDailyDeposit: Story = {
  args: {
    cumulative: true,
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
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [oneYearBudget],
    }),
  },
}

export const TenYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'quarter' }],
    }),
  },
}

export const TenYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'month' }],
    }),
  },
}

export const TenYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'week' }],
    }),
  },
}

export const TenYearDailyDeposit: Story = {
  args: {
    cumulative: true,
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
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [oneYearBudget],
    }),
  },
}

export const ThirtyYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'quarter' }],
    }),
  },
}

export const ThirtyYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'month' }],
    }),
  },
}

export const ThirtyYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'week' }],
    }),
  },
}

export const ThirtyYearDailyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...oneYearBudget, frequency: 'day' }],
    }),
  },
}
