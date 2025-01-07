import type { ResizableProps } from './Resizable.types'
import { useResizable } from './useResizable.hook'

export function Resizable({
  axis,
  disabled = false,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  onResizeStart,
  onResizeEnd,
  children,
  containerRef,
}: ResizableProps): React.JSX.Element {
  const resizable = useResizable({
    axis,
    disabled,
    initial,
    min,
    max,
    reverse,
    onResizeStart,
    onResizeEnd,
    containerRef,
  })

  return children(resizable)
}
