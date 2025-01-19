import { createUser, findUserByEmail } from '@/server/composables/auth'
import { EnumOAuthProvider, EnumUserRole, EnumUserStatus } from '../../database/schemas/enum.schema'

export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    const data = await findUserByEmail(user.email)
    if (!data.length) {
      const res = await createUser({
        email: user.email,
        o_auth_provider: EnumOAuthProvider.GOOGLE,
        full_name: user.name,
        avatar_url: user.picture,
        status: EnumUserStatus.ACTIVE,
        role: EnumUserRole.USER,
        o_auth_id: user.sub,
      })
      setUserSession(event, { user: res[0] })
      return sendRedirect(event, '/')
    }

    if (data[0].o_auth_provider !== EnumOAuthProvider.GOOGLE) {
      return sendRedirect(event, '/auth/login?errorMessage=Email is already registered with another provider')
    }

    if (data[0].status === EnumUserStatus.INACTIVE) {
      return sendRedirect(event, '/auth/login?errorMessage=User is inactive')
    }

    setUserSession(event, { user: data[0] })
    return sendRedirect(event, '/')
  },
})
