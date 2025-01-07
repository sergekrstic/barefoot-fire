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
  const [, setCytoInstance] = useState<cy.Core>()
  const setSelectedBudgetId = useAppStore((state) => state.setSelectedBudgetId)
  // const [_cytoInstance, setCytoInstance] = useState<cy.Core>()

  useEffect(() => {
    if (containerRef.current) {
      const instance = cy({ container: containerRef.current, elements: data, ...graphSettings })
      setCytoInstance(instance)

      const selectNode = (event: cy.EventObject): void => {
        const node = event.target.data()
        setSelectedBudgetId(node.id)
      }

      const enterNode = (): void => {
        if (instance) {
          instance.container()!.style.cursor = 'pointer'
        }
      }

      const exitNode = (): void => {
        if (instance) {
          instance.container()!.style.cursor = 'grab'
        }
      }

      instance.on('select', 'node', selectNode)
      instance.on('mouseover', 'node', enterNode)
      instance.on('mouseout', 'node', exitNode)

      return (): void => {
        instance.off('select', 'node', selectNode)
        instance.off('mouseover', 'node', enterNode)
        instance.off('mouseout', 'node', exitNode)
        instance.destroy()
      }
    }
  }, [containerRef, data, setSelectedBudgetId])

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
