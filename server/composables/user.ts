import { and, asc, count, desc, eq, ilike, isNull, or } from 'drizzle-orm'
import { usersTable } from '../database/schemas'
import { EnumOAuthProvider } from '../database/schemas/enum.schema'

type User = Partial<typeof usersTable.$inferSelect>

export async function updateUserById(id: string, data: User) {
  return await db.update(usersTable).set(data).where(eq(usersTable.id, id)).returning()
}
