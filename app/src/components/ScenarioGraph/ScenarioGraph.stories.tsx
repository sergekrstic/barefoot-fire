import type { Meta, StoryObj } from '@storybook/react'

import { simpleScenarioGraph } from 'mocks'

import { ScenarioGraph } from './ScenarioGraph.component'

const meta = {
  component: ScenarioGraph,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ScenarioGraph>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { data: simpleScenarioGraph },
  render: (props) => (
    <div className="h-screen w-screen">
      <ScenarioGraph {...props} />
    </div>
  ),
}
