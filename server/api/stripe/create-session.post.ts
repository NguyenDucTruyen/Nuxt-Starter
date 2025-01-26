import { createCheckoutSession } from '@/server/composables/stripe'

export default defineEventHandler(async (event) => {
  try {
    const { user }: { user: any } = await requireUserSession(event)
    const response = await createCheckoutSession(user.email as string)
    setResponseStatus(event, 200)
    return {
      data: response,
    }
  }
  catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Internal Server Error',
      data: error.data || {},
    })
  }
})
