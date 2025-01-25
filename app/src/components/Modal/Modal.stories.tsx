/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { ModalBasic } from './Modal.basic'
import { Modal, ModalClose, ModalContent, ModalDescription, ModalHeading, ModalTrigger } from './Modal.component'

const meta = {
  component: ModalBasic,
} satisfies Meta<typeof ModalBasic>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: ModalBasic,
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    console.log('open', open)

    return (
      <Modal open={open} onOpenChange={setOpen}>
        <ModalTrigger
          className="rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600"
          onClick={() => setOpen((prev) => !prev)}
        >
          Click
        </ModalTrigger>
        <ModalContent className="m-8 max-w-screen-sm rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
          <ModalHeading className="pb-8 text-2xl">Modal heading</ModalHeading>
          <ModalDescription>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi recusandae mollitia adipisci, ut
              illum amet beatae sunt? Saepe, ad!
            </p>
            <p className="mb-2">
              Saepe nesciunt voluptates, quibusdam voluptate perspiciatis aut iste tenetur corrupti assumenda reiciendis
              amet provident, est sequi vitae perferendis cumque dolorem.
            </p>
            <p className="mb-2">
              Suscipit delectus, doloribus temporibus adipisci quas, iusto dolore ipsum, dicta magnam blanditiis ipsa
              perspiciatis dolores doloremque quisquam? Error, beatae laudantium?
            </p>
            <p className="mb-8">
              Totam id minima et provident odio a quas amet nesciunt? Adipisci rem dolore maxime maiores unde,
              distinctio fugit minus eligendi.
            </p>
          </ModalDescription>
          <ModalClose className="cursor-pointer rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-300 outline-none hover:border-violet-200 hover:bg-violet-600 hover:text-violet-200">
            Close
          </ModalClose>
        </ModalContent>
      </Modal>
    )
  },
}
