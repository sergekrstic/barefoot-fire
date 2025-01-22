import { useEffect } from 'react'

import cy from 'cytoscape'
import { useAppStore } from 'stores'

import { graphSettings } from '../ScenarioGraph.settings'

export interface UseScenarioGraphProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function useScenarioGraph({ containerRef }: UseScenarioGraphProps): cy.Core | null {
  const cytoInstance = useAppStore((state) => state.cytoInstance)
  const setCytoInstance = useAppStore((state) => state.setCytoInstance)

  const scenarioGraph = useAppStore((state) => state.scenarioGraph)
  const setSelectedScenarioId = useAppStore((state) => state.setSelectedScenarioId)
  const setHighlightedPath = useAppStore((state) => state.setHighlightedPath)

  useEffect(() => {
    if (!containerRef.current) return

    const instance = cy({ container: containerRef.current, elements: scenarioGraph, ...graphSettings })
    setCytoInstance(instance)

    // Highlight the root node and center the graph
    instance.$id('root').data('focused', true)
    instance.$id('root').data('highlighted', true)
    instance.center(instance.elements())

    // Initialise the store
    setSelectedScenarioId('root')
    setHighlightedPath(['root'])

    return (): void => {
      setCytoInstance(null)
      instance?.destroy()
    }
  }, [containerRef, scenarioGraph, setCytoInstance, setHighlightedPath, setSelectedScenarioId])

  return cytoInstance
}
