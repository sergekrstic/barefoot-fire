import { useEffect, useState } from 'react'

import cy from 'cytoscape'

export interface UsePanLimitsProps {
  cytoInstance: cy.Core | null
  panLimitPadding: number
}

export const usePanLimits = ({ cytoInstance, panLimitPadding }: UsePanLimitsProps): void => {
  const [panLimits, setPanLimits] = useState<SchematicPanExtent>({ xMin: 0, xMax: 0, yMin: 0, yMax: 0 })
  const [panLimitsActive, setPanLimitsActive] = useState(false) // <-- This will be used when layout is implemented
  const [outsidePanLimits, setOutsidePanLimits] = useState(false)

  useEffect(() => {
    if (!cytoInstance) return

    let programmaticPan = false
    setPanLimitsActive(true)

    const onPan = (): void => {
      if (!panLimitsActive) return
      if (!programmaticPan && panLimits && outsidePanLimits) {
        programmaticPan = true
        const clampedPan = clampPan(cytoInstance.pan(), panLimits)
        cytoInstance.pan(clampedPan)
      } else {
        const newPan = cytoInstance.pan()
        const newOutsidePanLimits = isOutsidePanLimits(newPan, panLimits)
        setOutsidePanLimits(newOutsidePanLimits)
      }
    }

    const onResize = (): void => {
      const newPan = cytoInstance.pan()

      const newPanLimits = calculatePanLimits(cytoInstance, panLimitPadding * cytoInstance.zoom())
      setPanLimits(newPanLimits)

      const newOutsidePanLimits = isOutsidePanLimits(newPan, newPanLimits)
      setOutsidePanLimits(newOutsidePanLimits)
    }

    const onViewportChange = (): void => {
      programmaticPan = false
    }

    cytoInstance.on('pan', onPan)
    cytoInstance.on('resize', onResize)
    cytoInstance.on('zoom', onResize)
    cytoInstance.on('viewport', onViewportChange)

    return (): void => {
      cytoInstance.off('pan', onPan)
      cytoInstance.off('resize', onResize)
      cytoInstance.off('zoom', onResize)
      cytoInstance.off('viewport', onViewportChange)
    }
  }, [cytoInstance, panLimitsActive, panLimits, outsidePanLimits, panLimitPadding, setPanLimits])
}

function isOutsidePanLimits(pan: SchematicPan, panLimits: SchematicPanExtent): boolean {
  return pan.x <= panLimits.xMin || pan.x >= panLimits.xMax || pan.y <= panLimits.yMin || pan.y >= panLimits.yMax
}

function clampPan(pan: SchematicPan, limit: SchematicPanExtent): SchematicPan {
  return {
    x: clamp(pan.x, limit.xMin, limit.xMax),
    y: clamp(pan.y, limit.yMin, limit.yMax),
  }
}

function clamp(current: number, min: number, max: number): number {
  return Math.min(Math.max(current, min), max)
}

function calculatePanLimits(cy: cytoscape.Core, padding: number): SchematicPanExtent {
  const bbox = cy.elements().boundingBox()
  const zoom = cy.zoom()

  const panMinX = bbox.x1 * zoom
  const panMaxX = bbox.x2 * zoom

  return {
    xMin: panMinX - panMaxX + padding,
    xMax: cy.width() - padding,
    yMin: 0 - padding,
    yMax: cy.height() - padding,
  }
}

export interface SchematicPan {
  x: number
  y: number
}

export interface SchematicPanExtent {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
}
