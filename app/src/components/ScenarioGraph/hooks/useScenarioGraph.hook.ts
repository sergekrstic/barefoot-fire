import { useEffect, useRef } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'
import { deepClone } from 'utils'

import { graphSettings } from '../ScenarioGraph.settings'

export interface UseScenarioGraphProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function useScenarioGraph({ containerRef }: UseScenarioGraphProps): cy.Core | null {
  const isFirstRender = useRef(true)
  const cytoInstance = useAppStore((state) => state.ui.cytoInstance)
  const scenarioGraph = useAppStore((state) => state.data.scenarioGraph)
  const actions = useAppStore((state) => state.actions)

  // Create the graph
  useEffect(() => {
    if (!containerRef.current) return

    const instance = cy({ container: containerRef.current, ...graphSettings })
    actions.setCytoInstance(instance)

    return (): void => {
      actions.setCytoInstance(null)
      instance?.destroy()
    }
  }, [actions, containerRef])

  // Update the graph
  useEffect(() => {
    if (!cytoInstance) return

    cytoInstance.add(deepClone(scenarioGraph))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cytoInstance.layout({ name: 'tidytree', direction: 'LR' } as any).run()

    if (isFirstRender.current) {
      isFirstRender.current = false

      // Highlight the root node and center the graph
      cytoInstance.$id('root').data('focused', true)
      cytoInstance.$id('root').data('highlighted', true)

      // Initialise the store
      actions.selectScenario('root')
      actions.highlightPath(['root'])

      // Todo: figure out why center() and fit() are not working
      // cytoInstance.center()
      // cytoInstance.fit(cytoInstance.elements())
    }
  }, [actions, cytoInstance, scenarioGraph])

  return cytoInstance
}
