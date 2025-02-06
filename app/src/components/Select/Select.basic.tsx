/* eslint-disable react-compiler/react-compiler */
import * as React from 'react'

import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import { cn } from 'utils'

const options = ['Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'Pink', 'Maroon', 'Black', 'White']

export function Select(): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          })
        },
        padding: 10,
      }),
    ],
  })

  const elementsRef = React.useRef<Array<HTMLElement | null>>([])
  const labelsRef = React.useRef(options)
  const isTypingRef = React.useRef(false)

  const handleSelect = React.useCallback((index: number | null) => {
    setSelectedIndex(index)
    setIsOpen(false)
  }, [])

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true,
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping
    },
  })

  const click = useClick(context, { event: 'mousedown' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    listNav,
    typeahead,
    click,
    dismiss,
    role,
  ])

  const selectedLabel = selectedIndex !== null ? options[selectedIndex] : undefined

  return (
    <>
      <div
        tabIndex={0}
        ref={refs.setReference}
        aria-labelledby="select-label"
        aria-autocomplete="none"
        className="w-40 bg-slate-700 px-2 leading-loose outline-none"
        {...getReferenceProps()}
      >
        {selectedLabel || 'Select...'}
      </div>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className="min-w-40 overflow-y-auto rounded-lg bg-slate-800 outline-none"
              style={{ ...floatingStyles }}
              {...getFloatingProps()}
            >
              {options.map((value, i) => (
                <div
                  key={value}
                  ref={(node) => {
                    elementsRef.current[i] = node
                  }}
                  role="option"
                  tabIndex={i === activeIndex ? 0 : -1}
                  aria-selected={i === selectedIndex && i === activeIndex}
                  className={cn('cursor-default p-2 outline-none', { 'bg-slate-900': i === activeIndex })}
                  {...getItemProps({
                    // Handle pointer select.
                    onClick() {
                      handleSelect(i)
                    },
                    // Handle keyboard select.
                    onKeyDown(event) {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        handleSelect(i)
                      }

                      if (event.key === ' ' && !isTypingRef.current) {
                        event.preventDefault()
                        handleSelect(i)
                      }
                    },
                  })}
                >
                  {value}
                  <span aria-hidden className="absolute right-2">
                    {i === selectedIndex ? ' ✓' : ''}
                  </span>
                </div>
              ))}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
