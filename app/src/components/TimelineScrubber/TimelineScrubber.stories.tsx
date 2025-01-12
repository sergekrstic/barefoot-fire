import type { Meta, StoryObj } from '@storybook/react'

import { generateRandomTimeSeriesData } from 'utils'

import { TimelineScrubber } from './TimelineScrubber.component'

const meta = {
  component: TimelineScrubber,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TimelineScrubber>

export default meta
type Story = StoryObj<typeof meta>

export const NoData: Story = {
  args: {
    type: 'area',
    data: [],
  },
}

export const WithDataZoomedOut: Story = {
  args: {
    type: 'area',
    data: generateRandomTimeSeriesData(),
  },
}

export const WithDataZoomedIn: Story = {
  args: {
    type: 'area',
    data: generateRandomTimeSeriesData(),
    initialSelection: [25, 75],
  },
}
