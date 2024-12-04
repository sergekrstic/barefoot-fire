import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

export function createBarefootFireStatusBar(containerEl: HTMLElement): void {
  this.root = createRoot(containerEl)
  this.root.render(
    <StrictMode>
      <Statusbar />
    </StrictMode>,
  )
}

const emojis = ['🔥', '✅', '❌', '🤯']

function Statusbar(): JSX.Element {
  const [index, setIndex] = useState(0)
  return (
    <div
      onClick={() => {
        const newIndex = Math.floor(Math.random() * emojis.length)
        setIndex(newIndex)
      }}
    >
      {emojis[index]}
    </div>
  )
}
