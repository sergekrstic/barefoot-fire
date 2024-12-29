import type { Meta, StoryObj } from '@storybook/react'

import { App as AppComponent } from 'App.component'

const meta = {
  component: AppComponent,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AppComponent>

export default meta
type Story = StoryObj<typeof meta>

export const App: Story = {
  args: {},
}
