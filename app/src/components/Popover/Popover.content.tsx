import React from 'react'

import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react'

import { usePopoverContext } from './Popover.context'

export const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function PopoverContent(
  { style, ...props },
  propRef,
) {
  // @ts-expect-error - not sure not to fix this
  const { context: floatingContext, ...context } = usePopoverContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!floatingContext.open) return null

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div ref={ref} style={{ ...context.floatingStyles, ...style }} {...context.getFloatingProps(props)}>
          {props.children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  )
})
