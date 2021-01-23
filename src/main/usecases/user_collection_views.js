import { api } from '../../infra/http/remote'

export const postUserCollectionViews = async (userIri, progress, contentIri, watched) => {
  return await api.post('/general/watcheds', {
    user_iri: userIri,
    progress,
    content_iri: contentIri,
    watched
  })
}
