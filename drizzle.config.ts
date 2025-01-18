import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config()

// via connection params
export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schemas',
  out: './server/database/migrations',
  dbCredentials: {
    host: process.env.POSTGRES_HOST!,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB!,
    ssl: false,
  },
  verbose: true,
  strict: true,
})
