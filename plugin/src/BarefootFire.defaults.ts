import { BarefootFirePluginSettings, PluginCache } from 'BarefootFire.types'

export const BAREFOOT_FIRE_VIEW_TYPE = 'barefoot-fire'

export const DEFAULT_SETTINGS: Partial<BarefootFirePluginSettings> = {
  pocketsmithApiKey: '',
}

export const DEFAULT_CACHE: PluginCache = {}

// todo: remove these constants, replace with fetched data
export const USER_ID = 85521
export const INSTITUTION_ID = 7772
