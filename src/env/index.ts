import 'dotenv/config'
import { z } from 'zod'

// development, test, production
// Joi, Yup, Zod

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

//export const env = envSchema.parse(process.env)

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
  console.error('*** Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')

}

export const env = _env.data