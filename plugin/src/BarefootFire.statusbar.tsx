import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import { moment } from 'obsidian'
import { useInterval } from 'hooks'

export function createBarefootFireStatusBar(containerEl: HTMLElement): void {
  this.root = createRoot(containerEl)
  this.root.render(
    <StrictMode>
      <Statusbar />
    </StrictMode>,
  )
}

export const ONE_SECOND = 1000
export const ONE_MINUTE = 60 * ONE_SECOND
export const ONE_HOUR = 60 * ONE_MINUTE

function Statusbar(): JSX.Element {
  const [statusInfo, setStatusInfo] = useState(getStatusInfo())
  const [showPopup, setShowPopup] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: showPopup,
    onOpenChange: setShowPopup,
    middleware: [offset(16), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])

  useInterval(() => {
    setStatusInfo(getStatusInfo())
  }, ONE_HOUR)

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {statusInfo.status}
      </div>
      {showPopup && (
        <FloatingFocusManager context={context} modal={false}>
          <div className="status-popup" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {statusInfo.content}
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}

const statusInfoMap = {
  'on-fire': {
    id: 'on-fire',
    icon: '🔥',
    status: 'On fire',
    content: (
      <>
        <p>You are on fire!</p>
        <p>Keep up the the consistent effort.</p>
      </>
    ),
  },
  'on-track': { id: 'on-track', icon: '🟢', status: 'On track', content: '' },
  'review-required': { id: 'review-required', icon: '🟠', status: 'Review required', content: '' },
  'review-overdue': { id: 'review-overdue', icon: '🔴', status: 'Review overdue', content: '' },
  'off-track': { id: 'off-track', icon: '❌', status: 'Off track', content: '' },
}

function getStatusInfo(): { status: string; content: JSX.Element | string } {
  const now = moment()
  const reviewData = moment('2024-12-03')

  const info = !now.isAfter(reviewData) ? statusInfoMap['review-overdue'] : statusInfoMap['on-fire']
  // return now.isAfter(reviewData) ? 3 : Math.floor(Math.random() * statusEmojis.length)

  return { status: `${info.icon} ${info.status}`, content: info.content }
}
