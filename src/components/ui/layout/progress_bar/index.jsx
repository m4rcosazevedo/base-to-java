import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/flex'
import PropTypes from 'prop-types'

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarStyled>
      <Bar progress={progress} />
    </ProgressBarStyled>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
}

export default ProgressBar

const ProgressBarStyled = styled(Flex)`
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
