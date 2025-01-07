import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

export function ReactResizablePanels(): React.JSX.Element {
  return (
    <PanelGroup className="h-20" direction="horizontal">
      <Panel className="flex h-20 items-center justify-center bg-slate-800" defaultSize={30} minSize={20}>
        left
      </Panel>
      <PanelResizeHandle className="w-1 bg-blue-400" />
      <Panel className="flex h-20 items-center justify-center bg-slate-800" minSize={30}>
        middle
      </Panel>
      <PanelResizeHandle className="w-1 bg-blue-400" />
      <Panel className="flex h-20 items-center justify-center bg-slate-800" defaultSize={30} minSize={20}>
        right
      </Panel>
    </PanelGroup>
  )
}
