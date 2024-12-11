import { useEffect, useState } from 'react'
import { moment } from 'obsidian'

import { useInterval } from 'hooks'
import { usePluginStore } from 'stores'

import { Status } from '../BarefootFire.types'

export const ONE_SECOND = 1000
export const ONE_MINUTE = 60 * ONE_SECOND
export const ONE_HOUR = 60 * ONE_MINUTE

export function useStatusInfo(): Status {
  const lastCompletedReviewDate = usePluginStore((state) => state.lastCompletedReviewDate)
  const [status, setStatus] = useState(getLatestStatusInfo(lastCompletedReviewDate))

  useInterval(() => {
    setStatus(getLatestStatusInfo(lastCompletedReviewDate))
  }, ONE_HOUR)

  useEffect(() => {
    setStatus(getLatestStatusInfo(lastCompletedReviewDate))
  }, [lastCompletedReviewDate])

  return status
}

function getLatestStatusInfo(lastCompletedReviewDateString: string): Status {
  const lastCompletedReviewDate = moment(lastCompletedReviewDateString)

  // Get the first Tuesday of the month
  const today = moment()
  const startOfMonth = today.clone().startOf('month')
  const thisMonthReviewDate = today.clone().startOf('month').day(2)
  if (thisMonthReviewDate.isBefore(startOfMonth)) {
    thisMonthReviewDate.add(7, 'days')
  }

  // Assume on-track by default
  let status: Status = 'on-track'

  // Check if review is required
  if (lastCompletedReviewDate.isBefore(thisMonthReviewDate)) {
    // Review has not been completed for this month
    if (today.isBetween(thisMonthReviewDate.clone().subtract(3, 'day'), thisMonthReviewDate, 'day', '[]')) {
      // Review is required, today is between 3 days before the review date
      status = 'review-required'
    } else if (today.isAfter(thisMonthReviewDate)) {
      // Review is overdue, it is after the review date
      status = 'review-overdue'
    }
  }

  // Todo: 'on-fire'

  // Todo: 'off-track'

  return status
}
