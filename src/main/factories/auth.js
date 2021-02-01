import { Auth } from 'aws-amplify'
import { api } from '../../infra/http/remote'
import { getUser, setUser } from '../../utils/storage/user'
import { getSambaPlayerKey, setSambaPlayerKey } from '../../utils/storage/settings'
import { getLastUpdated, setLastUpdated } from '../../utils/storage/date'

export const makeAuth = async () => {
  try {
    const auth = await Auth.currentSession()
    const username = auth.getAccessToken().payload.username
    const user = getUser()
    const lastUpdated = getLastUpdated() !== new Date().toLocaleDateString()

    if (lastUpdated || !user || user.username !== username) {
      const me = await api.get('/users/me')
      await setUser(me.data)
    }

    if (lastUpdated || !getSambaPlayerKey()) {
      const sambaTechPlayerKey = await api.get('/settings/sambatech_player_key')
      await setSambaPlayerKey(sambaTechPlayerKey.data)
    }

    if (lastUpdated) {
      await setLastUpdated()
    }
  } catch (e) {
    throw new Error('User no authenticated')
  }
}
