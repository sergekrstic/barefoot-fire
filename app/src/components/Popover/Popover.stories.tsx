/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { PopoverBasic } from './Popover.basic'
import { Popover } from './Popover.component'
import { PopoverContent } from './Popover.content'
import { PopoverTrigger } from './Popover.trigger'

const meta = {
  component: PopoverBasic,
} satisfies Meta<typeof PopoverBasic>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: PopoverBasic,
}

export const Uncontrolled: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger className="bg-violet-700 px-4 py-2 text-violet-300 data-[state=open]:bg-violet-600 data-[state=open]:text-violet-200">
        Click
      </PopoverTrigger>
      <PopoverContent className="bg-violet-400 p-8 text-violet-800">Popover content</PopoverContent>
    </Popover>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className="rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600"
          onClick={() => setOpen((value) => !value)}
        >
          Click
        </PopoverTrigger>
        <PopoverContent className="rounded-lg bg-violet-400 p-8 text-violet-800">Popover content</PopoverContent>
      </Popover>
    )
  },
}
