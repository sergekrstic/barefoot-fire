import cy from 'cytoscape'

import { graphStyles } from './ScenarioGraph.styles'

export const graphSettings: cy.CytoscapeOptions = {
  style: graphStyles as cy.Stylesheet[],
  // @ts-expect-error - cytoscape-tidytree is not typed
  layout: { name: 'tidytree', direction: 'LR' },
}
