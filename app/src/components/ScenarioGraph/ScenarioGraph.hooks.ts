import { useEffect, useState } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'

import { graphSettings } from './ScenarioGraph.settings'

export interface UseGraphProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function useGraph({ containerRef }: UseGraphProps): cy.Core | undefined {
  const [cytoInstance, setCytoInstance] = useState<cy.Core>()

  const graphDefinition = useAppStore((state) => state.graphDefinition)
  const setSelectedBudgetId = useAppStore((state) => state.setSelectedBudgetId)
  const setHighlightedPath = useAppStore((state) => state.setHighlightedPath)

  useEffect(() => {
    if (!containerRef.current) return

    const instance = cy({ container: containerRef.current, elements: graphDefinition, ...graphSettings })
    setCytoInstance(instance)

    // Highlight the root node and center the graph
    instance.$id('root').data('focused', true)
    instance.$id('root').data('highlighted', true)
    instance.center(instance.elements())

    // Initialise the store
    setSelectedBudgetId('root')
    setHighlightedPath(['root'])

    return (): void => {
      instance?.destroy()
    }
  }, [containerRef, graphDefinition, setHighlightedPath, setSelectedBudgetId])

  return cytoInstance
}

export interface UseMouseEventsProps {
  cytoInstance: cy.Core | undefined
}

export function useMouseEvents({ cytoInstance }: UseMouseEventsProps): void {
  useEffect(() => {
    const enterNode = (): void => {
      if (!cytoInstance) return
      cytoInstance.container()!.style.cursor = 'pointer'
    }

    const exitNode = (): void => {
      if (!cytoInstance) return
      cytoInstance.container()!.style.cursor = 'grab'
    }

    const panStart = (event: cy.EventObject): void => {
      if (!cytoInstance) return
      if (event.target !== cytoInstance) return
      cytoInstance.container()!.style.cursor = 'grabbing'
    }

    const panEnd = (event: cy.EventObject): void => {
      if (!cytoInstance) return
      if (event.target !== cytoInstance) return
      cytoInstance.container()!.style.cursor = 'grab'
    }

    cytoInstance?.on('mouseover', 'node', enterNode)
    cytoInstance?.on('mouseout', 'node', exitNode)
    cytoInstance?.on('mousedown', panStart)
    cytoInstance?.on('mouseup', panEnd)

    return (): void => {
      cytoInstance?.off('mouseover', 'node', enterNode)
      cytoInstance?.off('mouseout', 'node', exitNode)
    }
  }, [cytoInstance])
}

export function useHighlightedPath({ cytoInstance }: UseMouseEventsProps): void {
  const selectedBudgetId = useAppStore((state) => state.selectedBudgetId)
  const setSelectedBudgetId = useAppStore((state) => state.setSelectedBudgetId)
  const pinnedPath = useAppStore((state) => state.pinnedPath)
  const setHighlightedPath = useAppStore((state) => state.setHighlightedPath)

  useEffect(() => {
    const highlightScenarioPath = (event: cy.EventObject): void => {
      if (!cytoInstance) return

      // First, deselect the currently focused node
      if (selectedBudgetId) {
        cytoInstance.$id(selectedBudgetId).data('focused', false)
      }

      // Then, select the new node
      const node = event.target.data()
      cytoInstance.$id(node.id).data('focused', true)
      setSelectedBudgetId(node.id)

      // Reset all highlights
      cytoInstance.elements().forEach((element) => {
        element.data('highlighted', false)
      })

      // Find the path back to the root and then highlight it
      const dijkstra = cytoInstance.elements().dijkstra({ root: '#root' })
      const shortestPath = dijkstra.pathTo(cytoInstance.$id(node.id))
      const shortestPathIds = shortestPath.nodes().map((element) => element.data('id'))
      setHighlightedPath(shortestPathIds)
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
  }, [cytoInstance, pinnedPath, selectedBudgetId, setHighlightedPath, setSelectedBudgetId])
}

export function usePinnedPath({ cytoInstance }: UseMouseEventsProps): void {
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

export function useResetPaths({ cytoInstance }: UseMouseEventsProps): void {
  const setSelectedBudgetId = useAppStore((state) => state.setSelectedBudgetId)
  const setHighlightedPath = useAppStore((state) => state.setHighlightedPath)
  const setPinnedPath = useAppStore((state) => state.setPinnedPath)

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
      setSelectedBudgetId('root')
      setHighlightedPath(['root'])
      setPinnedPath(null)
    }

    cytoInstance?.on('dblclick', deselectAndUnpinAll)

    return (): void => {
      cytoInstance?.off('dblclick', deselectAndUnpinAll)
    }
  }, [cytoInstance, setHighlightedPath, setPinnedPath, setSelectedBudgetId])
}
