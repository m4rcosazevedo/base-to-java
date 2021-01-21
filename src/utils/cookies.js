import Cookie from 'js-cookie'
import { settings } from '../configs/settings'

export const createCookieAdmin = (cookie) => {
  Cookie.set(settings.TOKEN, cookie, {
    domain: settings.DOMAIN
  })
}
