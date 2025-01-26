import { findUserByEmail, updateUserByEmail } from '@/server/composables/auth'
import { resetPasswordValidator } from '@/utils/validation'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const { email, token, password } = await readValidatedBody(event, resetPasswordValidator.parse)

  const data = await findUserByEmail(email)
  if (!data.length) {
    throw createError({
      statusCode: 401,
      message: 'Email not found',
    })
  }
  if (data[0].token_reset_password !== token) {
    throw createError({
      statusCode: 401,
      message: 'Invalid token',
    })
  }
  if (data[0].token_reset_password_expired_at && data[0].token_reset_password_expired_at < new Date()) {
    throw createError({
      statusCode: 401,
      message: 'Token expired',
    })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  await updateUserByEmail(email, { password: hashedPassword, token_reset_password: null, token_reset_password_expired_at: null })
  setResponseStatus(event, 200)
  return {
    message: 'Password has been reset',
  }
})
