import { useState } from 'react'

import {
  FloatingFocusManager,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'

export function PopoverBasic(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        Reference element
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            Popover element
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}
