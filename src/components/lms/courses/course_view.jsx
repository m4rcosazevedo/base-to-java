import React from 'react'
import PropTypes from 'prop-types'

const CourseView = ({ data }) => {
  return (
    <>
      curso {data.title}
    </>
  )
}

CourseView.propTypes = {
  data: PropTypes.object.isRequired
}

export default CourseView
