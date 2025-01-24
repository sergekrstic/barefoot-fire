import React from 'react'

import { usePopover } from './Popover.hook'

type ContextType = ReturnType<typeof usePopover> | null

export const PopoverContext = React.createContext<ContextType>(null)

export function usePopoverContext(): ContextType {
  const context = React.useContext(PopoverContext)

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />')
  }

  return context
}
