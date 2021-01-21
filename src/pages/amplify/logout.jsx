import { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import { clearStorage } from '../../utils/clear_storage'

const Logout = () => {
  const history = useHistory()

  useEffect(() => {
    (async () => {
      await Auth.signOut({ global: true })
      clearStorage()
      history.replace('/')
    })()
  }, [history])

  return null
}

export default Logout
