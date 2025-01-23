import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'assets'
import ReactDatePicker from 'react-date-picker'

import './Calendar.styles.css'
import './DatePicker.styles.css'

export type DateValuePiece = Date | null

export type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece]

export interface DatePickerProps {
  value: DateValue
  disabled?: boolean
  onChange?: (value: DateValue) => void
}

export function DatePicker({ value, disabled, onChange }: DatePickerProps): React.JSX.Element {
  return (
    <ReactDatePicker
      // className="bg-violet-200"
      disabled={disabled}
      portalContainer={null}
      value={value}
      onChange={onChange}
      clearIcon={null}
      calendarIcon={null}
      required
      calendarProps={{
        prevLabel: <ChevronLeftIcon size={20} />,
        prev2Label: <ChevronsLeftIcon size={20} />,
        nextLabel: <ChevronRightIcon size={20} />,
        next2Label: <ChevronsRightIcon size={20} />,
      }}
    />
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
- isOpen = false
- locale = browser locale
- maxDate = undefined
- maxDetail = "month" ['month', 'year', 'decade', 'century']
- minDate = undefined
- monthAriaLabel = undefined
- monthPlaceholder = "- -""
- name = "date"
- nativeInputAriaLabel = undefined
- onCalendarClose = undefined
- onCalendarOpen = undefined
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
- yearPlaceholder = "-- - -"
*/
