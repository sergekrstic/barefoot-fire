import * as React from 'react'

import { UseInteractionsReturn, useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react'

export interface ModalOptions {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface ModalResult extends ReturnType<typeof useFloating>, UseInteractionsReturn {
  context: ReturnType<typeof useFloating>['context']
  open: boolean
  setOpen: (open: boolean) => void
  labelId: string | undefined
  setLabelId: (id: string | undefined) => void
  descriptionId: string | undefined
  setDescriptionId: (id: string | undefined) => void
}

export function useModal({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: ModalOptions = {}): ModalResult {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)
  const [labelId, setLabelId] = React.useState<string | undefined>()
  const [descriptionId, setDescriptionId] = React.useState<string | undefined>()

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    open,
    onOpenChange: setOpen,
  })

  const context = data.context

  const click = useClick(context, { enabled: controlledOpen == null })
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' })
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, labelId, descriptionId],
  )
}
