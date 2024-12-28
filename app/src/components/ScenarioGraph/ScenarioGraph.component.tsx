import { useEffect, useRef, useState } from 'react'

import cy from 'cytoscape'
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
        'curve-style': 'round-taxi',
      },
    },
  ],
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
  // return <div ref={containerRef} className="h-screen w-screen" />
}

// export function ScenarioGraph() {
//   return <div className="flex h-full w-full items-center justify-center border border-black">Scenario Graph</div>
// }
