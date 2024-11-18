import { config } from 'dotenv'
import { z } from 'zod'

const result = config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)

const envSchema = z.object({
  POCKETSMITH_API_KEY: z.string(),
})

const env = envSchema.parse(process.env)

export const appConfig = {
  pocketSmithApiKey: env.POCKETSMITH_API_KEY,
}
