import * as React from 'react'

import { PopoverContext } from './Popover.context'
import { PopoverOptions, usePopover } from './Popover.hook'

export function Popover({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode
} & PopoverOptions): React.JSX.Element {
  // This can accept any props as options, e.g. `placement`, or other positioning options.
  const popover = usePopover({ modal, ...restOptions })
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>
}
