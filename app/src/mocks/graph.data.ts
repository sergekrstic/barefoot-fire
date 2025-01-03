import cy from 'cytoscape'

export const mockGraphData: cy.CytoscapeOptions['elements'] = {
  nodes: [
    { data: { id: 'start', name: 'Start', selected: true } },
    { data: { id: 'job1', name: 'Job 1', selected: true } },
    { data: { id: 'job2', name: 'Job 2', selected: false } },
    { data: { id: 'job3', name: 'Job 3', selected: true } },
  ],
  edges: [
    { data: { source: 'start', target: 'job1', selected: true } },
    { data: { source: 'job1', target: 'job2', selected: false } },
    { data: { source: 'job1', target: 'job3', selected: true } },
  ],
}
