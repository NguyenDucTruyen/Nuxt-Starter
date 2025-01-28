import { getAllPrices } from '@/server/composables/stripe'

export default defineEventHandler(async (event) => {
  try {
    await requireUserSession(event)
    const response = await getAllPrices()
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
