import type { EnumProductType } from '@/server/database/schemas/enum.schema'
import { createCheckoutSession } from '@/server/composables/stripe'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  try {
    const { user }: { user: any } = await requireUserSession(event)
    const { type } = await readValidatedBody(event, z.object({ type: z.string() }).parse)

    const response = await createCheckoutSession(user.email as string, type as EnumProductType)
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
