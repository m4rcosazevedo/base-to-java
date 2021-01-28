import { api } from '../../../../infra/http/remote'

export const getCoursesList = async (params) => {
  try {
    const response = await api.get('/lms/courses', { params })
    return response.data || []
  } catch (e) {
    throw new Error('Ocorreu um erro ao carregar os cursos')
  }
}

export const getCoursesListCountBy = async (params) => {
  try {
    const response = await api.get('/lms/courses/count_by', { params })
    return response.data || 0
  } catch (e) {
    throw new Error('Ocorreu um erro ao calcular quantidade de cursos')
  }
}

export const getCoursesView = async (slug, params) => {
  try {
    const response = await api.get(`/lms/courses?slug=${slug}`, { params })
    if (response.data && response.data.length) {
      return response.data[0]
    } else {
      return null
    }
  } catch (e) {
    throw new Error('Ocorreu um erro ao carregar o curso')
  }
}
