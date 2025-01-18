import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

config()
// Kết nối tới PostgreSQL
const sql = postgres({
  host: process.env.POSTGRES_HOST!,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB!,
  ssl: false,
})

export const db = drizzle(sql)
