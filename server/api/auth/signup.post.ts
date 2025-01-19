import { createUser, findUserByEmail } from '@/server/composables/auth'
import { signupValidator } from '@/utils/validation'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readValidatedBody(event, signupValidator.parse)
    const data = await findUserByEmail(email)
    if (data.length) {
      throw createError({
        statusCode: 401,
        message: 'Email already exists',
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    await createUser({ email, password: hashedPassword })
    return {}
  }
  catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message,
    })
  }
})
