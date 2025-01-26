import { updateUserById } from '@/server/composables/user'
import { updateProfileValidator } from '@/utils/validation'

export default defineEventHandler(async (event) => {
  const { user }: { user: any } = await requireUserSession(event)
  const id = getRouterParam(event, 'id')
  if (id !== user.id) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }
  const data = await readValidatedBody(event, updateProfileValidator.parse)
  const response = await updateUserById(id as string, data)
  const { password, ...updatedUser } = response[0]

  await setUserSession(event, {
    user: updatedUser,
  })
  setResponseStatus(event, 200)
  return {
    message: 'User updated',
    data: updatedUser,
  }
})
