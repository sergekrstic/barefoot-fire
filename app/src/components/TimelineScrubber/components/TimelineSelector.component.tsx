import { useRef } from 'react'

import { DragVerticalIcon } from 'assets'
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { Selection } from 'types'

import { useResizeSelection } from './TimelineSelector.hooks'

export interface TimelineSelectorProps {
  disabled?: boolean
  initialSelection?: Selection
  onUpdateSelection?: (selection: Selection) => void
}

export function TimelineSelector({
  disabled = false,
  initialSelection = [0, 100],
  onUpdateSelection,
}: TimelineSelectorProps): React.JSX.Element {
  const [initialStart, initialEnd] = initialSelection
  const leftPanelRef = useRef<ImperativePanelHandle>(null)
  const rightPanelRef = useRef<ImperativePanelHandle>(null)

  const { start, end, updateStart, updateEnd, maximize } = useResizeSelection({
    leftPanelRef,
    rightPanelRef,
    initialSelection,
    onUpdateSelection,
  })

  // const isDraggable = end - start !== 100
  const isDraggable = end - start === 999

  return (
    <PanelGroup direction="horizontal" onDoubleClick={maximize}>
      <Panel
        // Apply subtle glass effect, see: https://css.glass
        className="bg-gradient-to-tr from-slate-600/5 to-slate-600/20 backdrop-blur-[1px]"
        ref={leftPanelRef}
        defaultSize={initialStart}
        onResize={updateStart}
      />
      <PanelResizeHandle className="flex w-[5px] flex-col items-center justify-center bg-slate-700" disabled={disabled}>
        <DragVerticalIcon className="text-slate-950" size={16} />
      </PanelResizeHandle>
      <Panel className={`border-b border-t border-slate-700 ${isDraggable && 'cursor-grab'}`} />
      <PanelResizeHandle className="flex w-[5px] flex-col items-center justify-center bg-slate-700" disabled={disabled}>
        <DragVerticalIcon className="text-slate-950" size={16} />
      </PanelResizeHandle>
      <Panel
        // Apply subtle glass effect, see: https://css.glass
        className="border-t-slate-50/5x border-b border-b-slate-800 bg-gradient-to-tr from-slate-600/5 to-slate-600/20 backdrop-blur-[1px]"
        ref={rightPanelRef}
        defaultSize={100 - initialEnd}
        onResize={updateEnd}
      />
    </PanelGroup>
  )
}
