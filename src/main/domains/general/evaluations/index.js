import Proptypes from 'prop-types'
import { api } from '../../../../infra/http/remote'
import { getUserIri } from '../../../../utils/storage/user'

export const updateEvaluation = async (params) => {
  return await api.post('/general/evaluations', {
    user_iri: getUserIri(),
    ...params
  })
}

updateEvaluation.propTypes = {
  params: Proptypes.shape({
    content_iri: Proptypes.string.isRequired,
    value: Proptypes.oneOfType([
      Proptypes.string,
      Proptypes.number
    ]).isRequired,
    type: Proptypes.string.isRequired
  })
}
