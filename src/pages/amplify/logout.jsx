import { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import { clearStorage } from '../../utils/clear_storage'
import { settings } from '../../configs/settings'

const Logout = () => {
  const history = useHistory()

  useEffect(() => {
    (async () => {
      await Auth.signOut({ global: true })
      clearStorage()
      history.replace(settings.hasPublicPage ? '/' : '/login')
    })()
  }, [history])

  return null
}

export default Logout
