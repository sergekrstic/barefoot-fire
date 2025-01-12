import { useEffect, useRef, useState } from 'react'

import cy from 'cytoscape'
// @ts-expect-error - cytoscape-all-paths is not typed
import cytoscapeAllPaths from 'cytoscape-all-paths'
import tidytree from 'cytoscape-tidytree'
import { useAppStore } from 'stores'

import { graphSettings } from './ScenarioGraph.settings'

cy.use(tidytree)
cy.use(cytoscapeAllPaths)

export interface ScenarioGraphProps {
  data: cy.CytoscapeOptions['elements']
}

export function ScenarioGraph({ data }: ScenarioGraphProps): React.JSX.Element {
  const containerRef = useRef(null)
  const [cytoInstance, setCytoInstance] = useState<cy.Core>()
  const selectedBudgetId = useAppStore((state) => state.selectedBudgetId)
  const setSelectedBudgetId = useAppStore((state) => state.setSelectedBudgetId)
  const pinnedPath = useAppStore((state) => state.pinnedPath)
  const setHighlightedPath = useAppStore((state) => state.setHighlightedPath)
  const setPinnedPath = useAppStore((state) => state.setPinnedPath)

  // Initialize the graph
  useEffect(() => {
    if (containerRef.current) {
      const instance = cy({ container: containerRef.current, elements: data, ...graphSettings })
      setCytoInstance(instance)

      // console.log('data', data?.nodes.map((element) => [element.data.name, element.data.highlighted]))

      // Highlight the root node
      setSelectedBudgetId('root')
      instance.$id('root').data('focused', true)
      instance.$id('root').data('highlighted', true)
      instance.center(instance.elements())

      return (): void => {
        instance.destroy()
      }
    }
  }, [containerRef, data, setSelectedBudgetId])

  // Set up mouse events
  useEffect(() => {
    if (cytoInstance) {
      const enterNode = (): void => {
        cytoInstance.container()!.style.cursor = 'pointer'
      }

      const exitNode = (): void => {
        cytoInstance.container()!.style.cursor = 'grab'
      }

      const panStart = (event: cy.EventObject): void => {
        if (event.target !== cytoInstance) return
        cytoInstance.container()!.style.cursor = 'grabbing'
      }

      const panEnd = (event: cy.EventObject): void => {
        if (event.target !== cytoInstance) return
        cytoInstance.container()!.style.cursor = 'grab'
      }

      cytoInstance.on('mouseover', 'node', enterNode)
      cytoInstance.on('mouseout', 'node', exitNode)
      cytoInstance.on('mousedown', panStart)
      cytoInstance.on('mouseup', panEnd)

      return (): void => {
        cytoInstance.off('mouseover', 'node', enterNode)
        cytoInstance.off('mouseout', 'node', exitNode)
      }
    }
  }, [cytoInstance])

  // Set up selection events
  useEffect(() => {
    if (!cytoInstance) return

    const selectScenarioPath = (event: cy.EventObject): void => {
      const node = event.target.data()
      // First, deselect the currently focused node
      if (selectedBudgetId) {
        cytoInstance.$id(selectedBudgetId).data('focused', false)
      }
      // Then, select the new node
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
        shortestPathIds.length === pinnedPath.length && shortestPathIds.every((id) => pinnedPath.includes(id))
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

    const pinScenarioPath = (event: cy.EventObject): void => {
      const node = event.target.data()

      // Reset all pins
      cytoInstance.elements().forEach((element) => {
        element.data('pinned', false)
      })

      // Find the path back to the root and then pin it down
      const dijkstra = cytoInstance.elements().dijkstra({ root: 'root' })
      const shortestPath = dijkstra.pathTo(cytoInstance.$id(node.id))
      shortestPath.forEach((element) => {
        element.data('pinned', true)
        element.data('highlighted', false)
      })

      const shortestPathIds = shortestPath.nodes().map((element) => element.data('id'))
      setPinnedPath(shortestPathIds)
    }

    const deselectAndUnpinAll = (event: cy.EventObject): void => {
      if (event.target !== cytoInstance) return

      // Reset all selections
      cytoInstance.elements().forEach((element) => {
        element.data('focused', false)
        element.data('highlighted', false)
        element.data('pinned', false)
      })

      // Highlight the root node
      setSelectedBudgetId('root')
      cytoInstance.$id('root').data('focused', true)
      cytoInstance.$id('root').data('highlighted', true)

      // Reset all edges
      cytoInstance.edges().forEach((element) => {
        if (element.data('highlighted') === false) {
          element.animate({ style: { width: 3 }, easing: 'ease-in-out' }, { duration: 100 })
        }
      })
    }

    cytoInstance.on('select', 'node', selectScenarioPath)
    cytoInstance.on('dblclick', 'node', pinScenarioPath)
    cytoInstance.on('dblclick', deselectAndUnpinAll)

    return (): void => {
      cytoInstance.off('select', 'node', selectScenarioPath)
      cytoInstance.off('dblclick', 'node', pinScenarioPath)
      cytoInstance.off('dblclick', deselectAndUnpinAll)
    }
  }, [cytoInstance, pinnedPath, selectedBudgetId, setHighlightedPath, setPinnedPath, setSelectedBudgetId])

  // useEffect(() => {
  //   if (cytoInstance) {
  //     // @ts-expect-error - cytoscape-all-paths is not typed
  //     const paths = cytoInstance.elements().cytoscapeAllPaths() as cy.CollectionReturnValue[]
  //     paths[0].nodes().forEach((node) => {
  //       console.log(node.data('name'))
  //     })
  //   }
  // }, [cytoInstance])

  return <div ref={containerRef} className="h-full w-full cursor-grab" />
}
