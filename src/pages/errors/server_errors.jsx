import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container } from '../../components/ui/components'

const ServerErrors = ({ match }) => {
  const { number } = match.params

  const getTitle = () => {
    switch (number) {
      case '00': return 'Erro interno'
      case '01': return 'Funcionalidade não implementada'
      case '02': return 'Bad Gateway'
      case '03': return 'Serviço indisponível'
      case '04': return 'Tempo limite de conexão expirado'
      default: return 'Erro desconhecido'
    }
  }

  const getMessage = () => {
    switch (number) {
      case '00': return 'Ops, ocorreu um erro em nossos servidores'
      case '01': return 'O servidor não reconhece o método de solicitação ou não pode atender à solicitação'
      case '02':
      case '04': return 'O servidor estava agindo como um gateway ou proxy e recebeu uma resposta inválida do servidor upstream'
      case '03': return 'O servidor não pode lidar com a solicitação, porque está sobrecarregado ou fora do ar, tente novamente mais tarde'
      default: return 'Erro desconhecido'
    }
  }

  return (
    <Container>
      <Box textAlign="center">
        <h1>{getTitle()}</h1>
        <p>{getMessage()}</p>
      </Box>
    </Container>
  )
}

ServerErrors.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      number: PropTypes.string
    })
  })
}
export default ServerErrors
