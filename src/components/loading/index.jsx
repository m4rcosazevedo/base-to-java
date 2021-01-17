import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from '../ui/components/box'
import { customTheme } from '../../styles/theme'

const Loading = () => {
  return (
    <Box py="90px">
      <Spinner />
    </Box>
  )
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  border: 8px solid transparent;
  border-left-color: ${customTheme.colors.blue['700']};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: auto;
  animation: ${rotate} 1s linear infinite;
`

export default Loading
