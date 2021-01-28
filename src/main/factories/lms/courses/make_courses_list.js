import { getCoursesList, getCoursesListCountBy } from '../../../domains'

export const makeCoursesList = async (params) => {
  const currentParams = {
    active: true,
    ...params
  }

  return {
    data: await getCoursesList(currentParams),
    totalItems: await getCoursesListCountBy(currentParams)
  }
}
