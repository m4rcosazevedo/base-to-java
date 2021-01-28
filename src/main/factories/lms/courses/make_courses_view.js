import { getCoursesView } from '../../../domains/lms/courses'

export const makeCoursesView = async (slug) => {
  return await getCoursesView(slug)
}
