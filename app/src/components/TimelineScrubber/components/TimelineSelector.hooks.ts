import { MouseEvent, useCallback, useEffect, useState } from 'react'

import { ImperativePanelHandle } from 'react-resizable-panels'
import { Selection } from 'types'

export interface ResizeSelectionArgs {
  disabled?: boolean
  leftPanelRef: React.RefObject<ImperativePanelHandle | null>
  rightPanelRef: React.RefObject<ImperativePanelHandle | null>
  selection: Selection
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
  disabled = false,
  leftPanelRef,
  rightPanelRef,
  selection,
  onUpdateSelection,
}: ResizeSelectionArgs): ResizeSelection {
  const [start, end] = selection

  const updateStart = useCallback(
    (value: number): void => {
      if (onUpdateSelection) {
        onUpdateSelection([value, end])
      }
    },
    [onUpdateSelection, end],
  )

  const updateEnd = useCallback(
    (value: number): void => {
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
      if (onUpdateSelection) {
        onUpdateSelection([0, 100])
      }
    }
  }, [start, end, leftPanelRef, rightPanelRef, onUpdateSelection])

  useEffect(() => {
    if (disabled) {
      leftPanelRef.current?.resize(start)
      rightPanelRef.current?.resize(100 - end)
    }
  }, [disabled, end, leftPanelRef, rightPanelRef, start])

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
