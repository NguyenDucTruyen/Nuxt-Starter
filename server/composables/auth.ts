import { and, asc, count, desc, eq, ilike, isNull, or } from 'drizzle-orm'
import { usersTable } from '../database/schemas'
import { EnumOAuthProvider } from '../database/schemas/enum.schema'

type User = Partial<typeof usersTable.$inferSelect>

export async function findUserByEmail(email: string) {
  return await db.select().from(usersTable).where(eq(usersTable.email, email))
}

export async function findUserById(id: string) {
  return await db.select().from(usersTable).where(eq(usersTable.id, id))
}

export async function createUser(data: User) {
  return await db.insert(usersTable).values([data]).returning()
}

export async function findUserByIdGithub(id: string) {
  return await db.select().from(usersTable).where(and(eq(usersTable.o_auth_id, id), eq(usersTable.o_auth_provider, EnumOAuthProvider.GITHUB)))
}

export async function updateUserByEmail(email: string, data: User) {
  return await db.update(usersTable).set(data).where(and(eq(usersTable.email, email), isNull(usersTable.o_auth_provider))).returning()
}
