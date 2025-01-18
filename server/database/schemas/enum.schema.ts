import { pgEnum } from 'drizzle-orm/pg-core'

export enum EnumUserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum EnumUserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export enum EnumOAuthProvider {
  GOOGLE = 'google',
  GITHUB = 'github',
}

function transformPgEnum(value: any) {
  return Object.values(value)  as [string, ...string[]]
}

export const userStatus = pgEnum('user_status', transformPgEnum(EnumUserStatus))
export const userRole = pgEnum('user_role', transformPgEnum(EnumUserRole))
export const oAuthProvider = pgEnum('oauth_provider', transformPgEnum(EnumOAuthProvider))
