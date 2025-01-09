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

  // Initialize the graph
  useEffect(() => {
    if (containerRef.current) {
      const instance = cy({ container: containerRef.current, elements: data, ...graphSettings })
      setCytoInstance(instance)

      // Highlight the root node
      setSelectedBudgetId('root')
      instance.$id('root').data('selected', true)
      instance.$id('root').data('highlighted', true)

      return (): void => {
        instance.destroy()
      }
    }
  }, [containerRef, data, setSelectedBudgetId])

  // Set up mouse events
  useEffect(() => {
    if (cytoInstance) {
      const enterNode = (): void => {
        if (cytoInstance) {
          cytoInstance.container()!.style.cursor = 'pointer'
        }
      }

      const exitNode = (): void => {
        if (cytoInstance) {
          cytoInstance.container()!.style.cursor = 'grab'
        }
      }

      cytoInstance.on('mouseover', 'node', enterNode)
      cytoInstance.on('mouseout', 'node', exitNode)

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
      // First, deselect the currently selected node
      if (selectedBudgetId) {
        cytoInstance.$id(selectedBudgetId).data('selected', false)
      }
      // Then, select the new node
      cytoInstance.$id(node.id).data('selected', true)
      setSelectedBudgetId(node.id)

      // Reset all highlights
      cytoInstance.elements().forEach((element) => {
        element.data('highlighted', false)
      })

      // Find the path back to the root and then highlight it
      const dijkstra = cytoInstance.elements().dijkstra({ root: 'root' })
      const shortestPath = dijkstra.pathTo(cytoInstance.$id(node.id))
      shortestPath.forEach((element) => {
        element.data('highlighted', true)
      })

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
      })
    }

    const deselectAndUnpinAll = (event: cy.EventObject): void => {
      if (event.target !== cytoInstance) return

      // Reset all selections
      cytoInstance.elements().forEach((element) => {
        element.data('selected', false)
        element.data('highlighted', false)
        element.data('pinned', false)
      })

      // Highlight the root node
      setSelectedBudgetId('root')
      cytoInstance.$id('root').data('selected', true)
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
  }, [cytoInstance, selectedBudgetId, setSelectedBudgetId])

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
