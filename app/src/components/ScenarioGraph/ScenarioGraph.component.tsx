import { useEffect, useRef, useState } from 'react'

import cy from 'cytoscape'
// @ts-expect-error - cytoscape-all-paths is not typed
import cytoscapeAllPaths from 'cytoscape-all-paths'
import tidytree from 'cytoscape-tidytree'

import { graphData } from './ScenarioGraph.data'
import { graphStyles } from './ScenarioGraph.styles'

cy.use(tidytree)
cy.use(cytoscapeAllPaths)

const settings: cy.CytoscapeOptions = {
  elements: graphData,
  style: graphStyles,
  // @ts-expect-error - cytoscape-tidytree is not typed
  layout: { name: 'tidytree', direction: 'LR' },
}

export function ScenarioGraph(): React.JSX.Element {
  const containerRef = useRef(null)
  const [, setCytoInstance] = useState<cy.Core>()
  // const [_cytoInstance, setCytoInstance] = useState<cy.Core>()

  useEffect(() => {
    if (containerRef.current) {
      const instance = cy({ container: containerRef.current, ...settings })
      setCytoInstance(instance)

      // // Change cursor on grab
      // instance.on('mousedown', (e) => {
      //   console.log('mousedown', e)
      //   // e.target.style('cursor', 'grabbing')
      // })
      // instance.on('mouseup', (e) => {
      //   // e.target.style('cursor', 'grab')
      // })

      return (): void => instance.destroy()
    }
  }, [containerRef])

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
