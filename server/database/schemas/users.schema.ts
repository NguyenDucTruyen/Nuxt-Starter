import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm/relations'
import { EnumUserRole, EnumUserStatus, oAuthProvider, userRole, userStatus } from './enum.schema'

export const usersTable = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  email: text('email').unique(),
  o_auth_provider: oAuthProvider('o_auth_provider'),
  o_auth_id: text('o_auth_id'),
  password: text('password'),
  full_name: text('full_name'),
  avatar_url: text('avatar_url'),
  status: userStatus('status').default(EnumUserStatus.ACTIVE),
  role: userRole('role').default(EnumUserRole.USER),
  token_reset_password: text('code_reset_password'),
  token_reset_password_expired_at: timestamp('token_reset_password_expired_at', { withTimezone: true }),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  deleted_at: timestamp('deleted_at', { withTimezone: true }),
})
