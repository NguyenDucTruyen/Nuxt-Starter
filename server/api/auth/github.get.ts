import { createUser, findUserByIdGithub } from '@/server/composables/auth'
import { EnumOAuthProvider, EnumUserRole, EnumUserStatus } from '../../database/schemas/enum.schema'

export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user }) {
    const data = await findUserByIdGithub(user.id)
    if (!data.length) {
      const res = await createUser({
        o_auth_provider: EnumOAuthProvider.GITHUB,
        full_name: user.name,
        avatar_url: user.avatar_url,
        status: EnumUserStatus.ACTIVE,
        role: EnumUserRole.USER,
        o_auth_id: user.id,
      })
      setUserSession(event, { user: res[0] })
      return sendRedirect(event, '/')
    }

    if (data[0]?.status === EnumUserStatus.INACTIVE) {
      return sendRedirect(event, '/auth/login?errorMessage=User is inactive')
    }

    setUserSession(event, { user: data[0] })
    return sendRedirect(event, '/')
  },
})
