import { MouseEvent, useCallback, useState } from 'react'

import { ImperativePanelHandle } from 'react-resizable-panels'
import { Selection } from 'types'

export interface ResizeSelectionArgs {
  leftPanelRef: React.RefObject<ImperativePanelHandle | null>
  rightPanelRef: React.RefObject<ImperativePanelHandle | null>
  initialSelection: Selection
  onUpdateSelection?: (selection: Selection) => void
}

export interface ResizeSelection {
  start: number
  end: number
  updateStart: (value: number) => void
  updateEnd: (value: number) => void
  maximize: () => void
}

export function useResizeSelection({
  leftPanelRef,
  rightPanelRef,
  initialSelection,
  onUpdateSelection,
}: ResizeSelectionArgs): ResizeSelection {
  const [start, setStart] = useState(initialSelection[0])
  const [end, setEnd] = useState(initialSelection[1])

  const updateStart = useCallback(
    (value: number): void => {
      setStart(value)
      if (onUpdateSelection) {
        onUpdateSelection([value, end])
      }
    },
    [onUpdateSelection, end],
  )

  const updateEnd = useCallback(
    (value: number): void => {
      setEnd(100 - value)
      if (onUpdateSelection) {
        onUpdateSelection([start, 100 - value])
      }
    },
    [onUpdateSelection, start],
  )

  const maximize = useCallback((): void => {
    const isExpandable = end - start !== 100
    if (isExpandable) {
      leftPanelRef.current?.resize(0)
      rightPanelRef.current?.resize(0)
      setStart(0)
      setEnd(100)
      if (onUpdateSelection) {
        onUpdateSelection([0, 100])
      }
    }
  }, [start, end, leftPanelRef, rightPanelRef, onUpdateSelection])

  return { start, end, updateStart, updateEnd, maximize }
}

export interface DragSelection {
  isDragging: boolean
  handleDragStart: () => void
  handleDragEnd: () => void
  handleDragMove: (e: MouseEvent<HTMLDivElement>) => void
}

export function useDragSelection(): DragSelection {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = useCallback((): void => {
    setIsDragging(true)
  }, [])

  const handleDragEnd = useCallback((): void => {
    setIsDragging(false)
  }, [])

  const handleDragMove = useCallback(
    (e: MouseEvent<HTMLDivElement>): void => {
      if (isDragging) {
        e.preventDefault()
      }
    },
    [isDragging],
  )

  return { isDragging, handleDragStart, handleDragEnd, handleDragMove }
}
