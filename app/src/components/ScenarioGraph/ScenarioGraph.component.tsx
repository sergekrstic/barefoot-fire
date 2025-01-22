import { useRef } from 'react'

import cy from 'cytoscape'
// @xts-expect-error - cytoscape-all-paths is not typed
// import cytoscapeAllPaths from 'cytoscape-all-paths'
import tidytree from 'cytoscape-tidytree'

import {
  useHighlightedPath,
  useMousePointer,
  usePanLimits,
  usePinnedPath,
  useResetPaths,
  useScenarioGraph,
} from './hooks'

cy.use(tidytree)
// cy.use(cytoscapeAllPaths)

export function ScenarioGraph(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  const cytoInstance = useScenarioGraph({ containerRef })

  usePanLimits({ cytoInstance, panLimitPadding: 50 })
  useMousePointer({ cytoInstance })
  useHighlightedPath({ cytoInstance })
  usePinnedPath({ cytoInstance })
  useResetPaths({ cytoInstance })

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
