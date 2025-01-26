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

      // Reset all selections
      cytoInstance.elements().forEach((element) => {
        element.data('focused', false)
        element.data('highlighted', false)
        element.data('pinned', false)
      })

      // Highlight the root node
      cytoInstance.$id('root').data('focused', true)
      cytoInstance.$id('root').data('highlighted', true)

      // Reset all edges
      cytoInstance.edges().forEach((element) => {
        if (element.data('highlighted') === false) {
          element.animate({ style: { width: 3 }, easing: 'ease-in-out' }, { duration: 100 })
        }
      })

      // Update the store
      actions.setSelectedScenarioId('root')
      actions.setHighlightedPath(['root'])
      actions.setPinnedPath(null)
    }

    cytoInstance?.on('dblclick', deselectAndUnpinAll)

    return (): void => {
      cytoInstance?.off('dblclick', deselectAndUnpinAll)
    }
  }, [actions, cytoInstance])
}
