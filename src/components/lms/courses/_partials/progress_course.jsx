import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../../ui/components'
import { ProgressBar } from '../../../ui/layout'

const ProgressCourse = ({ title, progress }) => {
  return (
    <Box w={250}>
      <Box>{title} {progress.toFixed(0)}%</Box>
      <ProgressBar progress={progress} />
    </Box>
  )
}

ProgressCourse.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.number.isRequired
}

export default ProgressCourse
