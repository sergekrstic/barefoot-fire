import cy from 'cytoscape'

export const mockGraphData: cy.CytoscapeOptions['elements'] = {
  nodes: [
    { data: { id: 'root', name: 'Start', highlighted: true } },
    { data: { id: 'job1', name: 'Job 1', highlighted: true, selected: true } },
    { data: { id: 'job2', name: 'Job 2', highlighted: false } },
    { data: { id: 'job3', name: 'Job 3', highlighted: true } },
  ],
  edges: [
    { data: { source: 'root', target: 'job1', highlighted: true } },
    { data: { source: 'job1', target: 'job2', highlighted: false } },
    { data: { source: 'job1', target: 'job3', highlighted: true } },
  ],
}

export const mockRepresentativeGraphData: cy.CytoscapeOptions['elements'] = {
  nodes: [
    { data: { id: 'root', name: 'Start', highlighted: false, selected: false } },
    { data: { id: 'job-search', name: 'Job Search', highlighted: false, selected: false } },
    { data: { id: 'contract', name: 'Contract', highlighted: false, selected: false } },
    { data: { id: 'contract-rent', name: 'Renting', highlighted: false, selected: false } },
    { data: { id: 'full-time-rent', name: 'Renting', highlighted: false, selected: false } },
    { data: { id: 'full-time', name: 'Full Time', highlighted: false, selected: false } },
    { data: { id: 'contract-home', name: 'Home', highlighted: false, selected: false } },
    { data: { id: 'contract-share-market', name: 'Share Market', highlighted: false, selected: false } },
  ],
  edges: [
    { data: { source: 'root', target: 'job-search', highlighted: false } },
    { data: { source: 'job-search', target: 'full-time', highlighted: false } },
    { data: { source: 'job-search', target: 'contract', highlighted: false } },
    { data: { source: 'contract', target: 'contract-rent', highlighted: false } },
    { data: { source: 'full-time', target: 'full-time-rent', highlighted: false } },
    { data: { source: 'contract-rent', target: 'contract-home', highlighted: false } },
    { data: { source: 'contract-rent', target: 'contract-share-market', highlighted: false } },
  ],
}
