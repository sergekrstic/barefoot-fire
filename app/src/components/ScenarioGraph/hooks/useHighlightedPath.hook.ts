import { useEffect } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'

export interface UseHighlightedPathProps {
  cytoInstance: cy.Core | null
}

export function useHighlightedPath({ cytoInstance }: UseHighlightedPathProps): void {
  const selectedScenarioId = useAppStore((state) => state.ui.selectedScenarioId)
  const pinnedPath = useAppStore((state) => state.ui.pinnedPath)
  const actions = useAppStore((state) => state.actions)

  useEffect(() => {
    const highlightScenarioPath = (event: cy.EventObject): void => {
      if (!cytoInstance) return

      const scenarioId = event.target.data().id

      actions.highlightPath(scenarioId)
    }

    cytoInstance?.on('select', 'node', highlightScenarioPath)

    return (): void => {
      cytoInstance?.off('select', 'node', highlightScenarioPath)
    }
  }, [actions, cytoInstance, pinnedPath, selectedScenarioId])
}
