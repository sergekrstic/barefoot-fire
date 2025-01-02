import type { Meta, StoryObj } from '@storybook/react'

import { ScenarioGraph } from './ScenarioGraph.component'

const meta = {
  component: ScenarioGraph,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ScenarioGraph>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <div className="h-screen w-screen">
      <ScenarioGraph />
    </div>
  ),
}
