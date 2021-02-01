import { makeAuth } from '../../../main/factories'

export const guardsRoutes = async (to, _, next) => {
  if (to.meta.auth) {
    try {
      await makeAuth()
      next()
    } catch (e) {
      next.redirect('/login')
    }
  }
  next()
}
