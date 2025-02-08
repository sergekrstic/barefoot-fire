import { useEffect } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'

export interface UsePinnedPathProps {
  cytoInstance: cy.Core | null
}

export function usePinnedPath({ cytoInstance }: UsePinnedPathProps): void {
  const actions = useAppStore((state) => state.actions)

  useEffect(() => {
    const pinScenarioPath = (event: cy.EventObject): void => {
      if (!cytoInstance) return

      const scenarioId = event.target.data().id

      actions.pinPath(scenarioId)
    }

    cytoInstance?.on('dblclick', 'node', pinScenarioPath)

    return (): void => {
      cytoInstance?.off('dblclick', 'node', pinScenarioPath)
    }
  }, [actions, cytoInstance])
}
