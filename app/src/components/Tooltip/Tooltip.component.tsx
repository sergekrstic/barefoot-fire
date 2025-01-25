import * as React from 'react'

import { TooltipContext } from './Tooltip.context'
import { TooltipOptions, useTooltip } from './Tooltip.hook'

export function Tooltip({ children, ...options }: { children: React.ReactNode } & TooltipOptions): React.JSX.Element {
  // This can accept any props as options, e.g. `placement`, or other positioning options.
  const tooltip = useTooltip(options)
  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>
}
