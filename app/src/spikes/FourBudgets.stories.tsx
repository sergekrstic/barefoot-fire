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

const fourLinearBudgets: Budget[] = [
  {
    name: 'Budget 1',
    amount: 1000,
    frequency: 'year',
    ...thirtyYearPeriod,
  },
  {
    name: 'Budget 2',
    amount: 100,
    frequency: 'week',
    ...thirtyYearPeriod,
  },
  {
    name: 'Budget 3',
    amount: 10,
    frequency: 'day',
    ...thirtyYearPeriod,
  },
  {
    name: 'Budget 4',
    amount: 10,
    frequency: 'day',
    ...thirtyYearPeriod,
  },
]

const fourCompoundBudgets: Budget[] = [
  {
    name: 'Budget 1',
    amount: 1000,
    interestRate: 0.01,
    frequency: 'year',
    ...thirtyYearPeriod,
  },
  {
    name: 'Budget 2',
    amount: 100,
    interestRate: 0.02,
    frequency: 'week',
    ...thirtyYearPeriod,
  },
  {
    name: 'Budget 3',
    amount: 10,
    interestRate: 0.03,
    frequency: 'day',
    ...thirtyYearPeriod,
  },
  {
    name: 'Budget 4',
    amount: 10,
    interestRate: 0.04,
    frequency: 'day',
    ...thirtyYearPeriod,
  },
]

// ############################################
// Linear Events
// ############################################

export const OneYearLinearEvents: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourLinearBudgets,
    }),
  },
}

export const TenYearLinearEvents: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourLinearBudgets,
    }),
  },
}

export const ThirtyYearLinearEvents: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourLinearBudgets,
    }),
  },
}

// ############################################
// Linear Cumulative
// ############################################

export const OneYearLinearCumulative: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourLinearBudgets,
    }),
  },
}

export const TenYearLinearCumulative: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourLinearBudgets,
    }),
  },
}

export const ThirtyYearLinearCumulative: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourLinearBudgets,
    }),
  },
}

// ############################################
// Compound Events
// ############################################

export const OneYearCompoundEvents: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourCompoundBudgets,
    }),
  },
}

export const TenYearCompoundEvents: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourCompoundBudgets,
    }),
  },
}

export const ThirtyYearCompoundEvents: Story = {
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourCompoundBudgets,
    }),
  },
}

// ############################################
// Compound Cumulative
// ############################################

export const OneYearCompoundCumulative: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourCompoundBudgets,
    }),
  },
}

export const TenYearCompoundCumulative: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourCompoundBudgets,
    }),
  },
}

export const ThirtyYearCompoundCumulative: Story = {
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourCompoundBudgets,
    }),
  },
}
