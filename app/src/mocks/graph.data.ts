import cy from 'cytoscape'

export const mockGraphData: cy.CytoscapeOptions['elements'] = {
  nodes: [
    { data: { id: 'start', name: 'Start', highlighted: true } },
    { data: { id: 'job1', name: 'Job 1', highlighted: true, selected: true } },
    { data: { id: 'job2', name: 'Job 2', highlighted: false } },
    { data: { id: 'job3', name: 'Job 3', highlighted: true } },
  ],
  edges: [
    { data: { source: 'start', target: 'job1', highlighted: true } },
    { data: { source: 'job1', target: 'job2', highlighted: false } },
    { data: { source: 'job1', target: 'job3', highlighted: true } },
  ],
}
