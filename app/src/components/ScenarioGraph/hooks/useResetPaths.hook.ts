import { useEffect } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'

export interface UseResetPathsProps {
  cytoInstance: cy.Core | null
}

export function useResetPaths({ cytoInstance }: UseResetPathsProps): void {
  const actions = useAppStore((state) => state.actions)

  useEffect(() => {
    const deselectAndUnpinAll = (event: cy.EventObject): void => {
      if (!cytoInstance) return

      if (event.target !== cytoInstance) return

      actions.resetPaths()
    }

    cytoInstance?.on('dblclick', deselectAndUnpinAll)

    return (): void => {
      cytoInstance?.off('dblclick', deselectAndUnpinAll)
    }
  }, [actions, cytoInstance])
}
