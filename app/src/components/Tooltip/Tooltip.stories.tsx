/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { TooltipBasic } from './Tooltip.basic'
import { Tooltip } from './Tooltip.component'
import { TooltipContent } from './Tooltip.content'
import { TooltipTrigger } from './Tooltip.trigger'

const meta = {
  component: TooltipBasic,
} satisfies Meta<typeof TooltipBasic>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: TooltipBasic,
}

export const Uncontrolled: Story = {
  render: () => {
    return (
      <Tooltip>
        <TooltipTrigger className="bg-violet-700 px-4 py-2 text-violet-300 data-[state=open]:bg-violet-600 data-[state=open]:text-violet-200">
          Hover
        </TooltipTrigger>
        <TooltipContent className="bg-violet-400 p-8 text-violet-800">Tooltip content</TooltipContent>
      </Tooltip>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="App">
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger
            className="rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600"
            onClick={() => setOpen((value) => !value)}
          >
            Click
          </TooltipTrigger>
          <TooltipContent className="rounded-lg bg-violet-400 p-8 text-violet-800">Tooltip content</TooltipContent>
        </Tooltip>
      </div>
    )
  },
}
