import type { Meta, StoryObj } from '@storybook/react'

import { ResponsiveContainer } from 'components'
import { withChartContainer } from 'storybook'
import twColors from 'tailwindcss/colors'
import { generateRandomTimeSeriesData } from 'utils'

import { DifferenceChartV1, DifferenceChartV2, LineChart, StackedAreaChartV1, StackedAreaChartV2 } from './components'

const PlaceholderComponent = (): React.JSX.Element => <div>Placeholder</div>

const meta = {
  component: PlaceholderComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [withChartContainer],
} satisfies Meta<typeof PlaceholderComponent>

export default meta
type Story = StoryObj<typeof meta>

const primaryColor = twColors.violet[400]
const secondaryColor = twColors.amber[400]
const highlightedData = generateRandomTimeSeriesData({ name: 'highlighted', magnitude: 50 })
const pinnedData = generateRandomTimeSeriesData({ name: 'pinned', magnitude: 100 })
const pinnedOffsetData = pinnedData.map((d) => ({ ...d, amount: d.amount - 1000 }))
const data = [...highlightedData, ...pinnedOffsetData].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
)

export const Line: Story = {
  render: () => {
    return (
      <ResponsiveContainer>
        {({ width, height }) => <LineChart width={width} height={height} data={data} color="name" />}
      </ResponsiveContainer>
    )
  },
}

// Stacked is not appropriate for comparing financial data, because it adds up
// the values of the different series, causing the total to be misleading.
export const StackedArea1: Story = {
  render: () => {
    return (
      <ResponsiveContainer>
        {({ width, height }) => <StackedAreaChartV1 width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

export const StackedArea2: Story = {
  render: () => {
    return (
      <ResponsiveContainer>
        {({ width, height }) => <StackedAreaChartV2 width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

export const Difference1: Story = {
  render: () => {
    return (
      <ResponsiveContainer>
        {({ width, height }) => <DifferenceChartV1 width={width} height={height} data={pinnedOffsetData} />}
      </ResponsiveContainer>
    )
  },
}

export const Difference2: Story = {
  render: () => {
    return (
      <ResponsiveContainer>
        {({ width, height }) => <DifferenceChartV2 width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

export const Difference2Themed: Story = {
  render: () => {
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <DifferenceChartV2
            width={width}
            height={height}
            data={data}
            secondaryColor={secondaryColor}
            primaryColor={primaryColor}
          />
        )}
      </ResponsiveContainer>
    )
  },
}
