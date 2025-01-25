import { createContext, useContext } from 'react'

import { useTooltip } from './Tooltip.hook'

type ContextType = ReturnType<typeof useTooltip> | null

export const TooltipContext = createContext<ContextType>(null)

export function useTooltipContext(): ContextType {
  const context = useContext(TooltipContext)

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }

  return context
}
