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

      // First, deselect the currently focused node
      if (selectedScenarioId) {
        cytoInstance.$id(selectedScenarioId).data('focused', false)
      }

      // Then, select the new node
      const node = event.target.data()
      cytoInstance.$id(node.id).data('focused', true)
      actions.selectScenario(node.id)

      // Reset all highlights
      cytoInstance.elements().forEach((element) => {
        element.data('highlighted', false)
      })

      // Find the path back to the root and then highlight it
      const dijkstra = cytoInstance.elements().dijkstra({ root: '#root' })
      const shortestPath = dijkstra.pathTo(cytoInstance.$id(node.id))
      const shortestPathIds = shortestPath.nodes().map((element) => element.data('id'))
      actions.highlightPath(shortestPathIds)
      const isIdenticalPath =
        shortestPathIds.length === pinnedPath?.length && shortestPathIds.every((id) => pinnedPath.includes(id))
      if (!isIdenticalPath) {
        shortestPath.forEach((element) => {
          element.data('highlighted', true)
        })
      }

      // Todo: Improve the path animation, somehow, to make it more engaging
      shortestPath.edges().animate({ style: { width: 5 }, easing: 'ease-in-out' }, { duration: 100 })
      cytoInstance.edges().forEach((element) => {
        if (element.data('pinned') === true) return
        if (element.data('highlighted') === false) {
          element.animate({ style: { width: 3 }, easing: 'ease-in-out' }, { duration: 100 })
        }
      })
    }

    cytoInstance?.on('select', 'node', highlightScenarioPath)

    return (): void => {
      cytoInstance?.off('select', 'node', highlightScenarioPath)
    }
  }, [actions, cytoInstance, pinnedPath, selectedScenarioId])
}
