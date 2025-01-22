import { useEffect } from 'react'

import cy from 'cytoscape'

export interface UseMousePointerProps {
  cytoInstance: cy.Core | null
}

export function useMousePointer({ cytoInstance }: UseMousePointerProps): void {
  useEffect(() => {
    const enterNode = (): void => {
      if (!cytoInstance) return
      cytoInstance.container()!.style.cursor = 'pointer'
    }

    const exitNode = (): void => {
      if (!cytoInstance) return
      cytoInstance.container()!.style.cursor = 'grab'
    }

    const panStart = (event: cy.EventObject): void => {
      if (!cytoInstance) return
      if (event.target !== cytoInstance) return
      cytoInstance.container()!.style.cursor = 'grabbing'
    }

    const panEnd = (event: cy.EventObject): void => {
      if (!cytoInstance) return
      if (event.target !== cytoInstance) return
      cytoInstance.container()!.style.cursor = 'grab'
    }

    cytoInstance?.on('mouseover', 'node', enterNode)
    cytoInstance?.on('mouseout', 'node', exitNode)
    cytoInstance?.on('mousedown', panStart)
    cytoInstance?.on('mouseup', panEnd)

    return (): void => {
      cytoInstance?.off('mouseover', 'node', enterNode)
      cytoInstance?.off('mouseout', 'node', exitNode)
      cytoInstance?.off('mousedown', panStart)
      cytoInstance?.off('mouseup', panEnd)
    }
  }, [cytoInstance])
}
