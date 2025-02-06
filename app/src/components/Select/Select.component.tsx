import * as React from 'react'

import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
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
  selectedLabel: string | null
  getItemProps: ReturnType<typeof useInteractions>['getItemProps']
  handleSelect: (index: number | null) => void
}

const SelectContext = React.createContext<SelectContextValue>({} as SelectContextValue)

export interface SelectProps {
  children: React.ReactNode
  value?: string | null
  onSelect?: (value: string) => void
}

export function Select({ children, onSelect, value = null }: SelectProps): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [selectedLabel, setSelectedLabel] = React.useState<string | null>(value)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-end',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip()],
  })

  const elementsRef = React.useRef<Array<HTMLElement | null>>([])
  const labelsRef = React.useRef<Array<string | null>>([])

  const handleSelect = React.useCallback(
    (index: number | null) => {
      setSelectedIndex(index)
      setIsOpen(false)
      if (index !== null) {
        const newLabel = labelsRef.current[index]
        setSelectedLabel(newLabel)
        if (onSelect && newLabel) {
          onSelect(newLabel)
        }
      }
    },
    [onSelect],
  )

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
    selectedIndex: selectedIndex,
    onNavigate: setActiveIndex,
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex: selectedIndex,
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
      selectedLabel,
      getItemProps,
      handleSelect,
    }),
    [activeIndex, selectedIndex, selectedLabel, getItemProps, handleSelect],
  )

  return (
    <>
      <div
        tabIndex={0}
        ref={refs.setReference}
        aria-labelledby="select-label"
        aria-autocomplete="none"
        className={cn('inline-block select-none px-3 leading-loose outline-none', { 'bg-slate-700': isOpen })}
        {...getReferenceProps()}
      >
        {selectedLabel ?? 'Select...'}
      </div>
      <SelectContext.Provider value={selectContext}>
        {isOpen && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <div
                ref={refs.setFloating}
                className="flex flex-col rounded-sm border border-slate-700 bg-slate-800 outline-none"
                style={floatingStyles}
                {...getFloatingProps()}
              >
                <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                  {children}
                </FloatingList>
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </SelectContext.Provider>
    </>
  )
}

export interface OptionProps {
  className?: string
  label: string
}

export function Option({ className, label }: OptionProps): React.JSX.Element {
  const { activeIndex, selectedIndex, selectedLabel, getItemProps, handleSelect } = React.useContext(SelectContext)

  const { ref, index } = useListItem({ label })

  const isActive = activeIndex === index
  const isSelected = selectedLabel === label || selectedIndex === index

  return (
    <button
      ref={ref}
      role="option"
      className={cn('outline-none', { 'font-bold': isSelected, 'bg-violet-600': isActive }, className)}
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
