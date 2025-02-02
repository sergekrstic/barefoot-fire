import cy from 'cytoscape'

export const initialScenarioGraph: cy.ElementsDefinition = {
  nodes: [{ data: { id: 'root', name: 'Start' } }],
  edges: [],
}

export const simpleScenarioGraph: cy.ElementsDefinition = {
  nodes: [
    { data: { id: 'root', name: 'Start' } },
    { data: { id: 'job-1', name: 'Job 1' } },
    { data: { id: 'job-2', name: 'Job 2' } },
    { data: { id: 'job-3', name: 'Job 3' } },
  ],
  edges: [
    { data: { source: 'root', target: 'job-1' } },
    { data: { source: 'job-1', target: 'job-2' } },
    { data: { source: 'job-1', target: 'job-3' } },
  ],
}

export const detailedScenarioGraph: cy.ElementsDefinition = {
  nodes: [
    { data: { id: 'root', name: 'Start' } },
    { data: { id: 'job-search', name: 'Job Search' } },
    { data: { id: 'full-time', name: 'Full Time' } },
    { data: { id: 'full-time-rent', name: 'Renting' } },
    { data: { id: 'contract', name: 'Contract' } },
    { data: { id: 'contract-rent', name: 'Renting' } },
    { data: { id: 'contract-home', name: 'Home' } },
    { data: { id: 'contract-share-market', name: 'Share Market' } },
  ],
  edges: [
    { data: { source: 'root', target: 'job-search' } },
    { data: { source: 'job-search', target: 'full-time' } },
    { data: { source: 'job-search', target: 'contract' } },
    { data: { source: 'full-time', target: 'full-time-rent' } },
    { data: { source: 'contract', target: 'contract-rent' } },
    { data: { source: 'contract-rent', target: 'contract-home' } },
    { data: { source: 'contract-rent', target: 'contract-share-market' } },
  ],
}
