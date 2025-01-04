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

const yearlyBudget: Budget = {
  name: 'Budget 1',
  amount: 1000,
  interestRate: 0.05,
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
      budgets: [yearlyBudget],
    }),
  },
}

export const OneYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'quarter' }],
    }),
  },
}

export const OneYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'month' }],
    }),
  },
}

export const OneYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'week' }],
    }),
  },
}

export const OneYearDailyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'day' }],
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
      budgets: [yearlyBudget],
    }),
  },
}

export const TenYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'quarter' }],
    }),
  },
}

export const TenYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'month' }],
    }),
  },
}

export const TenYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'week' }],
    }),
  },
}

export const TenYearDailyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'day' }],
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
      budgets: [yearlyBudget],
    }),
  },
}

export const ThirtyYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'quarter' }],
    }),
  },
}

export const ThirtyYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'month' }],
    }),
  },
}

export const ThirtyYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'week' }],
    }),
  },
}

export const ThirtyYearDailyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyBudget, frequency: 'day' }],
    }),
  },
}
