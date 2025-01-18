export default defineEventHandler(async (event) => {
  try {
    const session = await requireUserSession(event)
    return {
      data: 'Hello, world!',
      session,
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
