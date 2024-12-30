import type { StoryFn } from '@storybook/react'

export function withChartContainer(Story: StoryFn): JSX.Element {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Story />
    </div>
  )
}
