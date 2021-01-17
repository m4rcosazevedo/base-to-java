import { api } from '../../infra/http/remote'

export const getPage = async (slug) => {
  try {
    const response = await api.get(`/cms/pages?slug=${slug}`)
    return response.data && response.data.length ? response.data[0] : null
  } catch (e) {
    throw new Error('Ocorreu um erro ao carregar os dados da página')
  }
}
