import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { PageNotFound } from '../../index'
import { makeCoursesView } from '../../../main/factories'
import CourseView from '../../../components/lms/courses/course_view'
import Loading from '../../../components/loading'

const CoursesView = ({ match }) => {
  const { slug } = match.params
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      setData(await makeCoursesView(slug))
      setLoading(false)
    })()
  }, [slug])

  if (loading) return <Loading />

  if (!data) return <PageNotFound />

  return (
    <>
      <CourseView data={data} />
    </>
  )
}

CoursesView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
  /* history: PropTypes.any.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.any
  }).isRequired */
}

export default CoursesView
