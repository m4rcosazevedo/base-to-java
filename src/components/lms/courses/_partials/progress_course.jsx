import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from '../../../ui/components'

const ProgressCourse = ({ title, progress }) => {
  return (
    <Box w={250}>
      {title && <Box>{title}: {progress.toFixed(0)}%</Box>}
      <ProgressBar>
        <Bar progress={progress} />
      </ProgressBar>
    </Box>
  )
}

ProgressCourse.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.number.isRequired
}

export default ProgressCourse

const ProgressBar = styled(Flex)`
  flex-grow: 1;
  align-items: center;
`

const Bar = styled(Flex)`
  height: 6px;
  border: 1px solid red;
  width: 100%;
  border-radius: 12px;
  &:before {
    width: ${({ progress }) => progress + '%'};
    content: '';
    background-color: blue;
    display: block;
    height: 100%;
    border-radius: 12px;
    transition: all .3s ease;
  }
`
