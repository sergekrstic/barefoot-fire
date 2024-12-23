export interface BarefootFirePluginSettings {
  pocketsmithApiKey: string
}

export type PluginCache = Record<string, unknown>

export type Status = 'on-fire' | 'on-track' | 'review-required' | 'review-overdue' | 'off-track'

export interface StatusInfo {
  status: Status
  title: string
  content: React.JSX.Element
}
