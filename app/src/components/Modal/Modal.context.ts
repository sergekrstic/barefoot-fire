import React from 'react'

import { useModal } from './Modal.hook'

type ContextType = ReturnType<typeof useModal> | null

export const ModalContext = React.createContext<ContextType>(null)

export function useModalContext(): ContextType {
  const context = React.useContext(ModalContext)

  if (context == null) {
    throw new Error('Modal components must be wrapped in <Modal />')
  }

  return context
}
