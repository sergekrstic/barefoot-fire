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

import { useStatusInfo } from 'hooks'
import { usePluginStore } from 'stores'
import { StatusInfo, Status } from 'BarefootFire.types'

export function createBarefootFireStatusBar(containerEl: HTMLElement): void {
  this.root = createRoot(containerEl)
  this.root.render(
    <StrictMode>
      <Statusbar />
    </StrictMode>,
  )
}

function Statusbar(): React.JSX.Element {
  const status = useStatusInfo()
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

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {statusInfoMap[status].title}
      </div>
      {showPopup && (
        <FloatingFocusManager context={context} modal={false}>
          <div className="status-popup" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {statusInfoMap[status].content}
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}

const statusInfoMap: Record<Status, StatusInfo> = {
  'on-fire': {
    status: 'on-fire',
    title: '🔥 On fire',
    content: <OnFireStatus />,
  },
  'on-track': {
    status: 'on-track',
    title: '🟢 On track',
    content: <OnTrackStatus />,
  },
  'review-required': {
    status: 'review-required',
    title: '🟠 Review required',
    content: <ReviewRequiredStatus />,
  },
  'review-overdue': {
    status: 'review-overdue',
    title: '🔴 Review overdue',
    content: <ReviewOverdueStatus />,
  },
  'off-track': {
    status: 'off-track',
    title: '❌ Off track',
    content: <OffTrackStatus />,
  },
}

function OnFireStatus(): React.JSX.Element {
  return (
    <>
      <h5>You are on fire!</h5>
      <p>Keep up the the consistent effort.</p>
    </>
  )
}

function OnTrackStatus(): React.JSX.Element {
  return (
    <>
      <h5>You are on track!</h5>
      <p>Keep up the the consistent effort.</p>
    </>
  )
}

function ReviewRequiredStatus(): React.JSX.Element {
  return (
    <>
      <p>You are on fire!</p>
      <p>Keep up the the consistent effort.</p>
    </>
  )
}

function ReviewOverdueStatus(): React.JSX.Element {
  const setLastCompletedReviewDate = usePluginStore((state) => state.setLastCompletedReviewDate)

  return (
    <>
      <h5>Barefoot review overdue</h5>
      <p>It's time to review your Barefoot progress.</p>
      <li>Transfer income across accounts.</li>
      <li>Categorize expenses in PocketSmith.</li>
      <li>Ensure buckets are within targets.</li>
      <li>Tag tax-related expenses.</li>
      <li>Upload tax invoices to PocketSmith.</li>
      <li>Cancel any unnecessary subscriptions.</li>
      <li>
        Adjust <b>smile</b> budgets for mid-term goals.
      </li>
      <li>Express gratitude for FIRE.</li>
      <button>Review now</button>
      <button
        onClick={() => {
          setLastCompletedReviewDate(moment().format('YYYY-MM-DD'))
        }}
      >
        Complete
      </button>
    </>
  )
}

function OffTrackStatus(): React.JSX.Element {
  return (
    <>
      <h5>You are on track!</h5>
      <p>Serious effort and focus is require find you path to freedom.</p>
    </>
  )
}
