import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { clearStorage } from '../../utils/clear_storage'
import { Box, Container } from '../../components/ui/components'

const NoAuthorization = () => {
  useEffect(() => {
    (async () => {
      try {
        await Auth.signOut({ global: true })
        clearStorage()
      } catch (e) {
        clearStorage()
      }
    })()
  }, [])

  return (
    <Container>
      <Box textAlign="center">
        <h1>Sem autorização</h1>
        <p>Você não tem permissão para acessar essa página</p>
      </Box>
    </Container>
  )
}

export default NoAuthorization
