import * as React from 'react'

import {
  FloatingFocusManager,
  FloatingList,
  autoUpdate,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListItem,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import { cn } from 'utils'

interface SelectContextValue {
  activeIndex: number | null
  selectedIndex: number | null
  getItemProps: ReturnType<typeof useInteractions>['getItemProps']
  handleSelect: (index: number | null) => void
}

const SelectContext = React.createContext<SelectContextValue>({} as SelectContextValue)

export function Select({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(true)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [selectedLabel, setSelectedLabel] = React.useState<string | null>(null)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip()],
  })

  const elementsRef = React.useRef<Array<HTMLElement | null>>([])
  const labelsRef = React.useRef<Array<string | null>>([])

  const handleSelect = React.useCallback((index: number | null) => {
    setSelectedIndex(index)
    setIsOpen(false)
    if (index !== null) {
      setSelectedLabel(labelsRef.current[index])
    }
  }, [])

  function handleTypeaheadMatch(index: number | null): void {
    if (isOpen) {
      setActiveIndex(index)
    } else {
      handleSelect(index)
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    listNav,
    typeahead,
    click,
    dismiss,
    role,
  ])

  const selectContext = React.useMemo(
    () => ({
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect,
    }),
    [activeIndex, selectedIndex, getItemProps, handleSelect],
  )

  return (
    <>
      <div
        tabIndex={0}
        ref={refs.setReference}
        aria-labelledby="select-label"
        aria-autocomplete="none"
        className="inline-block w-40 select-none bg-slate-700 px-2 leading-loose outline-none"
        {...getReferenceProps()}
      >
        {selectedLabel ?? 'Select...'}
      </div>
      <SelectContext.Provider value={selectContext}>
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="flex min-w-40 flex-col rounded-sm bg-slate-800 py-1 outline-none"
            >
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                {children}
              </FloatingList>
            </div>
          </FloatingFocusManager>
        )}
      </SelectContext.Provider>
    </>
  )
}

export function Option({ label }: { label: string }): React.JSX.Element {
  const { activeIndex, selectedIndex, getItemProps, handleSelect } = React.useContext(SelectContext)

  const { ref, index } = useListItem({ label })

  const isActive = activeIndex === index
  const isSelected = selectedIndex === index

  return (
    <button
      ref={ref}
      role="option"
      className={cn('p-2 text-left outline-none', { 'font-bold': isSelected, 'bg-violet-500': isActive })}
      aria-selected={isActive && isSelected}
      tabIndex={isActive ? 0 : -1}
      {...getItemProps({
        onClick: () => handleSelect(index),
      })}
    >
      {label}
    </button>
  )
}
