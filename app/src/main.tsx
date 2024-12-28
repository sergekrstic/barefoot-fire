import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.component.tsx'
import './App.styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
