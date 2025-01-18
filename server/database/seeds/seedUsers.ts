import bcrypt from 'bcrypt'
import { db } from '../../utils/db'
import { EnumUserRole, EnumUserStatus } from '../schemas/enum.schema'
import { usersTable } from '../schemas/index'

export async function seedUsers() {
  return db.insert(usersTable).values([
    {
      email: 'admin@gmail.com',
      email_verified: new Date(),
      phone: '123-456-7890',
      password: await bcrypt.hash('123456Aa', 10),
      full_name: 'Admin',
      avatar_url: '',
      created_at: new Date(),
      country: 'vi',
      status: EnumUserStatus.ACTIVE,
      role: EnumUserRole.ADMIN,
    },
    {
      email: 'ductruyen@example.com',
      email_verified: new Date(),
      phone: '123-456-7890',
      password: await bcrypt.hash('123456Aa', 10),
      full_name: 'Truyen Nguyen Duc',
      avatar_url: '',
      created_at: new Date(),
      country: 'vi',
      status: EnumUserStatus.ACTIVE,
      role: EnumUserRole.USER,
    },
  ])
}
