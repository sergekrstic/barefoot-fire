import { useEffect, useRef, useState } from 'react'

import cy from 'cytoscape'
// @ts-expect-error - cytoscape-all-paths is not typed
import cytoscapeAllPaths from 'cytoscape-all-paths'
import tidytree from 'cytoscape-tidytree'

cy.use(tidytree)
cy.use(cytoscapeAllPaths)

const settings: cy.CytoscapeOptions = {
  elements: {
    nodes: [
      { data: { id: '0', name: 'start' } },
      { data: { id: '1', name: 'job 1' } },
      { data: { id: '2', name: 'job 2' } },
      { data: { id: '3', name: 'job 3' } },
    ],
    edges: [
      { data: { source: '0', target: '1' } },
      { data: { source: '1', target: '2' } },
      { data: { source: '1', target: '3' } },
    ],
  },
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#606',
        label: 'data(name)',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        'line-color': '#c5c',
        'target-arrow-color': '#c5c',
        'target-arrow-shape': 'triangle',
        // @ts-expect-error - cytoscape-all-paths is not typed
        'curve-style': 'round-taxi',
      },
    },
  ],
  // @ts-expect-error - cytoscape-all-paths is not typed
  layout: { name: 'tidytree', direction: 'LR' },
}

export function ScenarioGraph(): React.JSX.Element {
  const containerRef = useRef(null)
  const [cytoInstance, setCytoInstance] = useState<cy.Core>()

  useEffect(() => {
    if (containerRef.current) {
      const instance = cy({ container: containerRef.current, ...settings })
      setCytoInstance(instance)
      return () => instance.destroy()
    }
  }, [containerRef])

  useEffect(() => {
    if (cytoInstance) {
      // @ts-expect-error - cytoscape-all-paths is not typed
      const paths = cytoInstance.elements().cytoscapeAllPaths() as cy.CollectionReturnValue[]
      paths[0].nodes().forEach((node) => {
        console.log(node.data('name'))
      })
    }
  }, [cytoInstance])

  return <div ref={containerRef} className="h-full w-full" />
}
