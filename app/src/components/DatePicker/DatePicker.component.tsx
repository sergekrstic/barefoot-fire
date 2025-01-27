import { useRef, useState } from 'react'

import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'assets'
import ReactDatePicker from 'react-date-picker'
import twColors from 'tailwindcss/colors'

import './Calendar.styles.css'
import './DatePicker.styles.css'

export type DateValuePiece = Date | null

export type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece]

export interface DatePickerProps {
  value: DateValue
  disabled?: boolean
  onChange?: (value: DateValue) => void
}

// Todo: fix this component to work with Safari
export function DatePicker({ value, disabled, onChange }: DatePickerProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom',
    // open: isOpen, // <-- This is not needed because the open state is managed by the DatePicker component
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
  })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context),
  ])

  const mergedFloatingRef = useMergeRefs([refs.setFloating, floatingRef])

  return (
    <div className="flex flex-row">
      {/*
          This is hack to move the focus off the DatePicker and
          onto this hidden button when a selection is made.
      */}
      <button ref={buttonRef} className="h-0 w-0" />

      <span ref={refs.setReference} {...getReferenceProps()}>
        <ReactDatePicker
          required
          isOpen={isOpen}
          disabled={disabled}
          portalContainer={floatingRef.current}
          value={value}
          clearIcon={null}
          calendarIcon={null}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => {
            setIsOpen(false)
            buttonRef.current?.focus() // <-- Move focus back to the hidden button
          }}
          onChange={(value) => {
            setIsOpen(false)
            if (onChange) onChange(value)
          }}
          calendarProps={{
            prevLabel: <ChevronLeftIcon size={20} />,
            prev2Label: <ChevronsLeftIcon size={20} />,
            nextLabel: <ChevronRightIcon size={20} />,
            next2Label: <ChevronsRightIcon size={20} />,
          }}
        />
      </span>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div ref={mergedFloatingRef} style={floatingStyles} {...getFloatingProps()}>
              <FloatingArrow
                ref={arrowRef}
                context={context}
                strokeWidth={1}
                style={{ transform: 'translateY(-1px)' }}
                fill={twColors.slate[200]}
                stroke={twColors.slate[300]}
              />
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </div>
  )
}

/*
- autoFocus = undefined
- calendarAriaLabel = undefined
- calendarProps = undefined
    - activeStartDate = (today)
    - allowPartialRange = false
    - calendarType = Browser locale
    - className = undefined
    - defaultActiveStartDate = (today)
    - defaultValue = undefined
    - defaultView = "month" ['month', 'year', 'decade', 'century']
    - formatDay = (default formatter)
    - formatLongDate = (default formatter)
    - formatMonth = (default formatter)
    - formatMonthYear = (default formatter)
    - formatShortWeekday = (default formatter)
    - formatWeekday = (default formatter)
    - formatYear = (default formatter)
    - goToRangeStartOnSelect = true
    - inputRef = undefined
    - locale = browser locale
    - maxDate = undefined
    - maxDetail = "month" ['month', 'year', 'decade', 'century']
    - minDate = undefined
    - minDetail = "century" ['month', 'year', 'decade', 'century']
    - navigationAriaLabel = undefined
    - navigationLabel = undefined
    - next2AriaLabel = undefined
    * next2Label = "»"
    - nextAriaLabel = undefined
    * nextLabel = "›"
    - onActiveStartDateChange = undefined
    - onChange = undefined
    - onClickDay = undefined
    - onClickDecade = undefined
    - onClickMonth = undefined
    - onClickWeekNumber = undefined
    - onClickYear = undefined
    - onDrillDown = undefined
    - onDrillUp = undefined
    - onViewChange = undefined
    - prev2AriaLabel = undefined
    * prev2Label = "«"
    - prevAriaLabel = undefined
    * prevLabel = "‹"
    - returnValue = "start" ['start', 'end', 'range']
    - selectRange = false
    - showDoubleView = false
    - showFixedNumberOfWeeks = false
    - showNavigation = true
    - showNeighboringCentury = false
    - showNeighboringDecade = false
    - showNeighboringMonth = true
    - showWeekNumbers = false
    - tileClassName = undefined
    - tileContent = undefined
    - tileDisabled = undefined
    - value = undefined
    - view = (most detailed view)
* calendarIcon = null
- className = undefined
- clearAriaLabel = undefined
* clearIcon = null
- closeCalendar = true
- data-testid = undefined
- dayAriaLabel = undefined
- dayPlaceholder = "- -""
- disableCalendar = false
- disabled = false
- format = undefined
- id = undefined
* isOpen = false
- locale = browser locale
- maxDate = undefined
- maxDetail = "month" ['month', 'year', 'decade', 'century']
- minDate = undefined
- monthAriaLabel = undefined
- monthPlaceholder = "- -""
- name = "date"
- nativeInputAriaLabel = undefined
* onCalendarClose = undefined
* onCalendarOpen = undefined
* onChange
- onFocus = undefined
- onInvalidChange = undefined
- openCalendarOnFocus = true
* portalContainer
* required
- returnValue = "start" ['start', 'end', 'range']
- shouldCloseCalendar = undefined ['buttonClick', 'escape', 'outsideAction', 'select' ,false]
- shouldOpenCalendar = undefined ['buttonClick', 'focus', false]
- showLeadingZeros = false
* value
- yearAriaLabel = undefined
- yearPlaceholder = "- - - -"
*/
