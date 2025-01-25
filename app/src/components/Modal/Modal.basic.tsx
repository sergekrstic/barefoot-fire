import { useState } from 'react'

import {
  FloatingFocusManager,
  FloatingOverlay,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react'

export function ModalBasic(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context, { outsidePressEvent: 'mousedown' }),
    useRole(context),
  ])

  // Set up label and description ids
  const labelId = useId()
  const descriptionId = useId()

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        Reference element
      </button>
      {isOpen && (
        <FloatingOverlay lockScroll style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
          <FloatingFocusManager context={context}>
            <div
              ref={refs.setFloating}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}
              {...getFloatingProps()}
            >
              <h2 id={labelId}>Heading element</h2>
              <p id={descriptionId}>Description element</p>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </>
  )
}
