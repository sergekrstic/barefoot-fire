import type { Meta, StoryObj } from '@storybook/react'

import { ResponsiveContainer } from 'components'
import { withChartContainer } from 'storybook'
import twColors from 'tailwindcss/colors'
import { generateRandomTimeSeriesData } from 'utils'

import {
  AreaChart as AreaChartComponent,
  BarChart as BarChartComponent,
  DotChart as DotChartComponent,
  LineChart as LineChartComponent,
  StyledAreaChart as StyledAreaChartComponent,
} from './components'

const PlaceholderComponent = () => <div>Placeholder</div>

const meta = {
  component: PlaceholderComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [withChartContainer],
} satisfies Meta<typeof PlaceholderComponent>

export default meta
type Story = StoryObj<typeof meta>

const secondaryColor = twColors.amber[400]

export const BarPrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <BarChartComponent width={width} height={height} data={data} interval="month" />}
      </ResponsiveContainer>
    )
  },
}

export const BarSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <BarChartComponent width={width} height={height} data={data} interval="month" color={secondaryColor} />
        )}
      </ResponsiveContainer>
    )
  },
}

export const LinePrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <LineChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

export const LineSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <LineChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>
    )
  },
}

export const SmoothLinePrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <LineChartComponent width={width} height={height} data={data} smooth />}
      </ResponsiveContainer>
    )
  },
}

export const SmoothLineSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <LineChartComponent width={width} height={height} data={data} color={secondaryColor} smooth />
        )}
      </ResponsiveContainer>
    )
  },
}

export const DotPrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <DotChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

export const DotSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <DotChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>
    )
  },
}

export const DotBinnedPrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <DotChartComponent width={width} height={height} data={data} interval="month" />}
      </ResponsiveContainer>
    )
  },
}

export const DotBinnedSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <DotChartComponent width={width} height={height} data={data} color={secondaryColor} interval="month" />
        )}
      </ResponsiveContainer>
    )
  },
}

export const AreaPrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <AreaChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>
    )
  },
}

export const AreaSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <AreaChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>
    )
  },
}

export const AreaTransparentPrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <AreaChartComponent width={width} height={height} data={data} opacity={0.5} />}
      </ResponsiveContainer>
    )
  },
}

export const AreaTransparentSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <AreaChartComponent width={width} height={height} data={data} color={secondaryColor} opacity={0.5} />
        )}
      </ResponsiveContainer>
    )
  },
}

export const StyledAreaTransparentPrimary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => <StyledAreaChartComponent width={width} height={height} data={data} opacity={0.5} />}
      </ResponsiveContainer>
    )
  },
}

export const StyledAreaTransparentSecondary: Story = {
  render: () => {
    const data = generateRandomTimeSeriesData()
    return (
      <ResponsiveContainer>
        {({ width, height }) => (
          <StyledAreaChartComponent width={width} height={height} data={data} color={secondaryColor} opacity={0.5} />
        )}
      </ResponsiveContainer>
    )
  },
}
