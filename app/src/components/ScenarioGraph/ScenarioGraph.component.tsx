import { useEffect, useRef, useState } from 'react'

import cy from 'cytoscape'
// @ts-expect-error - cytoscape-all-paths is not typed
import cytoscapeAllPaths from 'cytoscape-all-paths'
import tidytree from 'cytoscape-tidytree'
import { mockGraphData } from 'mocks'
import { useAppStore } from 'stores'

import { graphStyles } from './ScenarioGraph.styles'

cy.use(tidytree)
cy.use(cytoscapeAllPaths)

const settings: cy.CytoscapeOptions = {
  elements: mockGraphData,
  style: graphStyles,
  // @ts-expect-error - cytoscape-tidytree is not typed
  layout: { name: 'tidytree', direction: 'LR' },
}

export function ScenarioGraph(): React.JSX.Element {
  const containerRef = useRef(null)
  const [, setCytoInstance] = useState<cy.Core>()
  const setSelectedBudgetId = useAppStore((state) => state.setSelectedBudgetId)
  // const [_cytoInstance, setCytoInstance] = useState<cy.Core>()

  useEffect(() => {
    if (containerRef.current) {
      const instance = cy({ container: containerRef.current, ...settings })
      setCytoInstance(instance)

      const selectNode = (event: cy.EventObject): void => {
        const node = event.target.data()
        setSelectedBudgetId(node.id)
      }

      instance.on('select', 'node', selectNode)

      return (): void => {
        instance.off('select', 'node', selectNode)
        instance.destroy()
      }
    }
  }, [containerRef, setSelectedBudgetId])

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
