import React from 'react'

import { useMergeRefs } from '@floating-ui/react'

import { useTooltipContext } from './Tooltip.context'

export const TooltipTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & { asChild?: boolean }>(
  function TooltipTrigger({ className, children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([context?.refs.setReference, propRef, childrenRef])

    if (!context) {
      throw new Error('TooltipTrigger must be used within a Tooltip component')
    }

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          className,
          ...props,
          // @ts-expect-error - not sure how to fix this
          ...children.props,
          'data-state': context.open ? 'open' : 'closed',
        }),
      )
    }

    return (
      <button
        ref={ref}
        className={className}
        // The user can style the trigger based on the state
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    )
  },
)
