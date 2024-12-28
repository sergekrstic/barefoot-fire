import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.component.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
