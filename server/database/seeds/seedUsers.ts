import bcrypt from 'bcrypt'
import { db } from '../../utils/db'
import { EnumUserRole, EnumUserStatus } from '../schemas/enum.schema'
import { usersTable } from '../schemas/index'

export async function seedUsers() {
  return db.insert(usersTable).values([
    {
      email: 'admin@gmail.com',
      o_auth_provider: null,
      o_auth_id: null,
      password: await bcrypt.hash('123456Aa', 10),
      full_name: 'Admin',
      avatar_url: '',
      status: EnumUserStatus.ACTIVE,
      role: EnumUserRole.ADMIN,
      token_reset_password: null,
      token_reset_password_expired_at: null,
      created_at: new Date(),
      deleted_at: null,
    },
    {
      email: 'ductruyen@example.com',
      o_auth_provider: null,
      o_auth_id: null,
      password: await bcrypt.hash('123456Aa', 10),
      full_name: 'Truyen Nguyen Duc',
      avatar_url: '',
      status: EnumUserStatus.ACTIVE,
      role: EnumUserRole.USER,
      token_reset_password: null,
      token_reset_password_expired_at: null,
      created_at: new Date(),
      deleted_at: null,
    },
  ])
}
