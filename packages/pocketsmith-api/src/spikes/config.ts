import { config as dotenvConfig } from 'dotenv'
import { z } from 'zod'

const result = dotenvConfig()

if (result.error) {
  throw result.error
}

const envSchema = z.object({
  POCKETSMITH_API_KEY: z.string(),
})

const env = envSchema.parse(process.env)

export const config = {
  pocketSmithApiKey: env.POCKETSMITH_API_KEY,
  userId: 85521,
}

export type Config = typeof config
