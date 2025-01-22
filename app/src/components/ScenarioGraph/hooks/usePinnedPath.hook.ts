import { useEffect } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'

export interface UsePinnedPathProps {
  cytoInstance: cy.Core | null
}

export function usePinnedPath({ cytoInstance }: UsePinnedPathProps): void {
  const setPinnedPath = useAppStore((state) => state.setPinnedPath)

  useEffect(() => {
    const pinScenarioPath = (event: cy.EventObject): void => {
      if (!cytoInstance) return

      // Reset all pins
      cytoInstance.elements().forEach((element) => {
        element.data('pinned', false)
      })

      // Find the path back to the root and then pin it down
      const node = event.target.data()
      const dijkstra = cytoInstance.elements().dijkstra({ root: 'root' })
      const shortestPath = dijkstra.pathTo(cytoInstance.$id(node.id))
      shortestPath.forEach((element) => {
        element.data('pinned', true)
        element.data('highlighted', false)
      })

      const shortestPathIds = shortestPath.nodes().map((element) => element.data('id'))
      setPinnedPath(shortestPathIds)
    }

    cytoInstance?.on('dblclick', 'node', pinScenarioPath)

    return (): void => {
      cytoInstance?.off('dblclick', 'node', pinScenarioPath)
    }
  }, [cytoInstance, setPinnedPath])
}
