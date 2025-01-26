import { useEffect } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'

import { graphSettings } from '../ScenarioGraph.settings'

export interface UseScenarioGraphProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function useScenarioGraph({ containerRef }: UseScenarioGraphProps): cy.Core | null {
  const cytoInstance = useAppStore((state) => state.ui.cytoInstance)
  const scenarioGraph = useAppStore((state) => state.data.scenarioGraph)
  const actions = useAppStore((state) => state.actions)

  useEffect(() => {
    if (!containerRef.current) return

    const instance = cy({ container: containerRef.current, elements: scenarioGraph, ...graphSettings })
    actions.setCytoInstance(instance)

    // Highlight the root node and center the graph
    instance.$id('root').data('focused', true)
    instance.$id('root').data('highlighted', true)
    instance.center(instance.elements())

    // Initialise the store
    actions.selectScenario('root')
    actions.highlightPath(['root'])

    return (): void => {
      actions.setCytoInstance(null)
      instance?.destroy()
    }
  }, [actions, containerRef, scenarioGraph])

  return cytoInstance
}
