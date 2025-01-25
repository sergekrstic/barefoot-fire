import { Children, cloneElement, forwardRef, isValidElement, useEffect, useRef, useState } from 'react'

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react'

export interface ContextMenuItemProps {
  label: string
  disabled?: boolean
  onClick?: () => void
}

export const ContextMenuItem = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & ContextMenuItemProps
>(({ label, disabled, ...props }, ref) => {
  return (
    <button {...props} ref={ref} role="menuitem" disabled={disabled}>
      {label}
    </button>
  )
})

export interface ContextMenuProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string
  label?: string
  nested?: boolean
}

export const ContextMenu = ({ className, children }: ContextMenuProps): React.JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])
  const listContentRef = useRef(
    Children.map(children, (child) =>
      isValidElement(child) ? (child.props as ContextMenuItemProps).label : null,
    ) as Array<string | null>,
  )
  const allowMouseUpCloseRef = useRef(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset({ mainAxis: 5, alignmentAxis: 4 }),
      flip({
        fallbackPlacements: ['left-start'],
      }),
      shift({ padding: 10 }),
    ],
    placement: 'right-start',
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
  })

  const role = useRole(context, { role: 'menu' })
  const dismiss = useDismiss(context)
  const listNavigation = useListNavigation(context, {
    listRef: listItemsRef,
    onNavigate: setActiveIndex,
    activeIndex,
  })
  const typeahead = useTypeahead(context, {
    enabled: isOpen,
    listRef: listContentRef,
    onMatch: setActiveIndex,
    activeIndex,
  })

  const { getFloatingProps, getItemProps } = useInteractions([role, dismiss, listNavigation, typeahead])

  useEffect(() => {
    let timeout: number

    const onContextMenu = (e: MouseEvent): void => {
      e.preventDefault()

      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: e.clientX,
            y: e.clientY,
            top: e.clientY,
            right: e.clientX,
            bottom: e.clientY,
            left: e.clientX,
          }
        },
      })

      setIsOpen(true)
      clearTimeout(timeout)

      allowMouseUpCloseRef.current = false
      timeout = window.setTimeout(() => {
        allowMouseUpCloseRef.current = true
      }, 300)
    }

    const onMouseUp = (): void => {
      if (allowMouseUpCloseRef.current) {
        setIsOpen(false)
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('mouseup', onMouseUp)

    return (): void => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('mouseup', onMouseUp)
      clearTimeout(timeout)
    }
  }, [refs])

  return (
    <FloatingPortal>
      {isOpen && (
        <FloatingOverlay lockScroll>
          <FloatingFocusManager context={context} initialFocus={refs.floating}>
            <div className={className} ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
              {Children.map(
                children,
                (child, index) =>
                  isValidElement(child) &&
                  cloneElement(
                    child,
                    getItemProps({
                      tabIndex: activeIndex === index ? 0 : -1,
                      ref(node: HTMLButtonElement) {
                        listItemsRef.current[index] = node
                      },
                      onClick() {
                        ;(child.props as ContextMenuItemProps).onClick?.()
                        setIsOpen(false)
                      },
                      onMouseUp() {
                        ;(child.props as ContextMenuItemProps).onClick?.()
                        setIsOpen(false)
                      },
                    }),
                  ),
              )}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </FloatingPortal>
  )
}
