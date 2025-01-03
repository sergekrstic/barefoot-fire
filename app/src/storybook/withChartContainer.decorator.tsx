import type { Decorator } from '@storybook/react'

export const withChartContainer: Decorator = (Story) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Story />
    </div>
  )
}
