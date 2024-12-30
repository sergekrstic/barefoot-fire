import type { Meta, StoryObj } from '@storybook/react'

import { ResponsiveContainer } from 'components'
import moment from 'moment'
import { withChartContainer } from 'storybook'

import { BarChart as BarChartComponent, LineChart as LineChartComponent } from './components'

const PlaceholderComponent = () => <div>Placeholder</div>

const meta = {
  component: PlaceholderComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [withChartContainer],
} satisfies Meta<typeof PlaceholderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const BarChart: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <BarChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

export const LineChart: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <LineChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

function generateRandomTimeSeriesData() {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({ date: moment().add(i, 'w').toISOString(), amount: Math.random() * 100, name: 'A' })
  }
  return data
}
