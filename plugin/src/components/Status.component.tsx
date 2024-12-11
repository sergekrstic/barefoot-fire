import { useStatusInfo } from 'hooks'

export function Status(): JSX.Element {
  const status = useStatusInfo()

  return (
    <div>
      {status === 'on-fire' && 'You are on fire!'}
      {status === 'on-track' && 'You are on track!'}
      {status === 'review-required' && 'Review required'}
      {status === 'review-overdue' && 'Review overdue'}
      {status === 'off-track' && 'Off track'}
    </div>
  )
}
