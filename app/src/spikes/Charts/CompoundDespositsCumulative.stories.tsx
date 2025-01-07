import type { Meta, StoryObj } from '@storybook/react'

import { ScenarioChartV1 } from 'components'

import { calculateScenarioEvents } from '@fire/forecast-engine'

import {
  defaultScenarioBudgets,
  oneYearPeriod,
  tenYearPeriod,
  thirtyYearPeriod,
  yearlyCompoundBudget,
} from './sharedStoryData'

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

// ############################################
// One year period
// ############################################

export const OneYearYearlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [yearlyCompoundBudget],
    }),
  },
}

export const OneYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'quarter' }],
    }),
  },
}

export const OneYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'month' }],
    }),
  },
}

export const OneYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'week' }],
    }),
  },
}

export const OneYearDailyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'day' }],
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
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [yearlyCompoundBudget],
    }),
  },
}

export const TenYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'quarter' }],
    }),
  },
}

export const TenYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'month' }],
    }),
  },
}

export const TenYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'week' }],
    }),
  },
}

export const TenYearDailyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'day' }],
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
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [yearlyCompoundBudget],
    }),
  },
}

export const ThirtyYearQuarterlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'quarter' }],
    }),
  },
}

export const ThirtyYearMonthlyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'month' }],
    }),
  },
}

export const ThirtyYearWeeklyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'week' }],
    }),
  },
}

export const ThirtyYearDailyDeposit: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{ ...yearlyCompoundBudget, frequency: 'day' }],
    }),
  },
}
