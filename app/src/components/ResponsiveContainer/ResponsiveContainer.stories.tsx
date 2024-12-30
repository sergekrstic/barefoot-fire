import type { Meta, StoryObj } from '@storybook/react'

const DummyComponent = () => <div>To do...</div>

const meta = {
  component: DummyComponent,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DummyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
