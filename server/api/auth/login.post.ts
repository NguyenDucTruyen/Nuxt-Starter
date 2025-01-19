import { findUserByEmail } from '@/server/composables/auth'
import { loginValidator } from '@/utils/validation'
import bcrypt from 'bcrypt'
import { EnumUserStatus } from '~/server/database/schemas/enum.schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, loginValidator.parse)
  const data = await findUserByEmail(email)
  if (!data.length) {
    throw createError({
      statusCode: 401,
      message: 'Email or password is incorrect',
    })
  }

  if (data[0].o_auth_provider) {
    throw createError({
      statusCode: 401,
      message: 'Email is already registered with another provider',
    })
  }
  if (data[0].status === EnumUserStatus.INACTIVE) {
    throw createError({
      statusCode: 401,
      message: 'User is inactive',
    })
  }

  const validPassword = await bcrypt.compare(password, data[0].password as string)
  if (validPassword) {
    const { password, ...user } = data[0]

    await setUserSession(event, {
      user,
    })
    setResponseStatus(event, 200)
    return { data: user }
  }
  throw createError({
    statusCode: 401,
    message: 'Email or password is incorrect',
  })
})
