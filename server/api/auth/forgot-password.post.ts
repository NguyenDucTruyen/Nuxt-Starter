import { findUserByEmail, updateUserByEmail } from '@/server/composables/auth'
import { emailValidator } from '@/utils/validation'

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig()
    const { sendMail } = useNodeMailer()
    const { email } = await readValidatedBody(event, emailValidator.parse)

    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const response = await updateUserByEmail(email, { token_reset_password: otp, token_reset_password_expired_at: new Date(Date.now() + 15 * 60 * 1000) })
    if (!response.length) {
      throw createError({
        statusCode: 401,
        message: 'Email not found',
      })
    }
    const res = await sendMail({
      to: email,
      subject: 'Password Reset',
      text: `Please click on the link to reset your password: ${runtimeConfig.public.appBaseUrl}/auth/reset-password?token=${otp}`,
    })
    console.log('res::', res)
    setResponseStatus(event, 200)
    return {
      message: 'Password reset link has been sent to your email',
    }
  }
  catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message,
    })
  }
})
