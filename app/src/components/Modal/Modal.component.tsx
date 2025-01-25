import * as React from 'react'

import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useId, useMergeRefs } from '@floating-ui/react'

import { ModalContext, useModalContext } from './Modal.context'
import { ModalOptions, useModal } from './Modal.hook'

export function Modal({
  children,
  ...options
}: {
  children: React.ReactNode
} & ModalOptions): React.JSX.Element {
  const modal = useModal(options)
  return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
}

export interface ModalTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const ModalTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & ModalTriggerProps>(
  function ModalTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useModalContext()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([context?.refs.setReference, propRef, childrenRef])

    if (!context) {
      throw new Error('ModalTrigger must be used within a Modal component')
    }

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
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
        // The user can style the trigger based on the state
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    )
  },
)

export const ModalContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  function ModalContent(props, propRef) {
    const context = useModalContext()
    const ref = useMergeRefs([context?.refs.setFloating, propRef])

    if (!context) {
      throw new Error('ModalContent must be used within a Modal component')
    }

    const floatingContext = context.context
    if (!floatingContext.open) return null

    return (
      <FloatingPortal>
        <FloatingOverlay className="flex h-screen w-screen items-center justify-center bg-black/60" lockScroll>
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  },
)

export const ModalHeading = React.forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
  function ModalHeading({ children, ...props }, ref) {
    const context = useModalContext()
    const id = useId()

    if (!context) {
      throw new Error('ModalHeading must be used within a Modal component')
    }

    // Only sets `aria-labelledby` on the Modal root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
      context.setLabelId(id)
      return (): void => context.setLabelId(undefined)
    }, [id, context])

    return (
      <h2 {...props} ref={ref} id={id}>
        {children}
      </h2>
    )
  },
)

export const ModalDescription = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
  function ModalDescription({ children, ...props }, ref) {
    const context = useModalContext()
    const id = useId()

    if (!context) {
      throw new Error('ModalDescription must be used within a Modal component')
    }

    // Only sets `aria-describedby` on the Modal root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
      context.setDescriptionId(id)
      return (): void => context.setDescriptionId(undefined)
    }, [id, context])

    return (
      <div {...props} ref={ref} id={id}>
        {children}
      </div>
    )
  },
)

export const ModalClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  function ModalClose(props, ref) {
    const context = useModalContext()

    if (!context) {
      throw new Error('ModalClose must be used within a Modal component')
    }

    return <button type="button" {...props} ref={ref} onClick={() => context.setOpen(false)} />
  },
)
