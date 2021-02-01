import axios from 'axios'
import { Auth } from 'aws-amplify'
import { settings } from '../../configs/settings'

export const api = axios.create({
  baseURL: settings.API_URL
})

api.interceptors.request.use(async (config) => {
  try {
    const session = await Auth.currentSession()
    const token = session.getIdToken().getJwtToken()
    Object.assign(config, {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token
      }
    })
    return Promise.resolve(config)
  } catch (e) {
    return Promise.resolve(config)
  }
}, (error) => {
  return Promise.reject(error)
})

api.interceptors.response.use((response) => response, async (error) => {
  const status = 'response' in error ? error.response.status : null

  if (status) {
    if (status >= 501 && status < 600) {
      window.location.href = `/${status}`
    } else {
      switch (status) {
        case 401:
          window.location.href = '/sair'
          break
        case 403:
          window.location.href = '/403'
          break
        case 404:
          window.location.href = '/404'
          break
        case 500:
          return Promise.reject(error)
        default:
          window.location.href = '/sair'
          break
      }
    }
  } else {
    window.location.href = '/503'
  }
  return Promise.reject(error)
})
