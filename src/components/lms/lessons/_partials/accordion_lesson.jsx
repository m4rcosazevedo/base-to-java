import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from '../../../ui/components'
import { ProgressBar } from '../../../ui/layout'
import { Icon } from '../../../../assets/icons'

const AccordionLesson = ({ active, title, progress, lessonNumber, onActiveLesson }) => {
  const colSize = (spaces) => {
    const space = 8.333
    return `${(space * spaces).toFixed(5)}%`
  }

  const handleActive = () => {
    onActiveLesson()
  }

  return (
    <Row active={active}>
      <Box w={[colSize(3), colSize(3), colSize(1)]}>
        Aula {(`0${lessonNumber}`).slice(-2)}
      </Box>
      <Box w={[colSize(9), colSize(9), colSize(8)]}>
        <Title>{title}</Title>
      </Box>
      <Box w={[colSize(12), colSize(12), colSize(3)]}>
        <Flex>
          <Box mr={5} fw="bold">{progress}%</Box>
          <ProgressBar progress={progress} />
          <Icon onClick={handleActive} name={`${active ? 'minus' : 'plus'}-circle-light`} height={20} clicked />
        </Flex>
      </Box>
    </Row>
  )
}

AccordionLesson.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  lessonNumber: PropTypes.number.isRequired,
  onActiveLesson: PropTypes.func.isRequired
}

export default AccordionLesson

const Row = styled(Flex)`
  background-color: ${({ active }) => active ? '#8591a5' : '#eeeeee'} ;
  color: ${({ active }) => active ? '#ffffff' : '#313131'} ;
  align-items: center;
`

const Title = styled.h4`
  border-right: 1px solid #bbb;
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`
