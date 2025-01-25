import React from 'react'

import { FloatingPortal, useMergeRefs } from '@floating-ui/react'

import { useTooltipContext } from './Tooltip.context'

export const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function TooltipContent(
  { className, style, ...props },
  propRef,
) {
  const context = useTooltipContext()
  const mergedFloatingRef = useMergeRefs([context?.refs.setFloating, propRef])

  if (!context?.open) return null

  return (
    <FloatingPortal>
      <div
        ref={mergedFloatingRef}
        className={className}
        style={{ ...context.floatingStyles, ...style }}
        {...context.getFloatingProps(props)}
      />
    </FloatingPortal>
  )
})
