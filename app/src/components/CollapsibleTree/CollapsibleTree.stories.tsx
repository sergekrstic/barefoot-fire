import type { Meta, StoryObj } from '@storybook/react'

import { CollapsibleTree } from './CollapsibleTree.component'

const meta = {
  component: CollapsibleTree,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CollapsibleTree>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tree: [
      {
        id: '1',
        title: 'Parent 1',
        children: [
          { id: '1.1', title: 'Child 1.1' },
          {
            id: '1.2',
            title: 'Child 1.2',
            children: [
              { id: '1.2.1', title: 'Grandchild 1.2.1' },
              { id: '1.2.2', title: 'Grandchild 1.2.2' },
            ],
          },
        ],
      },
      {
        id: '2',
        title: 'Parent 2',
        children: [
          { id: '2.1', title: 'Child 2.1' },
          { id: '2.2', title: 'Child 2.2' },
        ],
      },
    ],
    // Todo: Update the type definition for `renderCollapsibleItemContent` and `renderLeafItemContent`
    renderCollapsibleItemContent: (item) => <div>{item.title as string}</div>,
    renderLeafItemContent: (item) => <div>{item.title as string}</div>,
  },
}
