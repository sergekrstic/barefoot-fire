import cy from 'cytoscape'

export const graphData: cy.CytoscapeOptions['elements'] = {
  nodes: [
    { data: { id: '0', name: 'start' } },
    { data: { id: '1', name: 'job 1' } },
    { data: { id: '2', name: 'job 2' } },
    { data: { id: '3', name: 'job 3', selected: true } },
  ],
  edges: [
    { data: { source: '0', target: '1' } },
    { data: { source: '1', target: '2' } },
    { data: { source: '1', target: '3' } },
  ],
}
