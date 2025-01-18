import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm/relations'
import { EnumUserRole, EnumUserStatus, oAuthProvider, userRole, userStatus } from './enum.schema'

export const usersTable = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  email: text('email').unique().notNull(),
  email_verified: timestamp('email_verified', { withTimezone: true }),
  phone: text('phone'),
  o_auth_provider: oAuthProvider('o_auth_provider'),
  password: text('password'),
  full_name: text('full_name'),
  avatar_url: text('avatar_url'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  deleted_at: timestamp('deleted_at', { withTimezone: true }),
  country: varchar('country'),
  status: userStatus('status').default(EnumUserStatus.ACTIVE),
  role: userRole('role').default(EnumUserRole.USER),
})
