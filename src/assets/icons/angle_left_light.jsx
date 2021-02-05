import React from 'react'
import styled from 'styled-components'
import { IconStyled } from './default_styled'

export const AngleLeftLight = ({height = 30, ...props}) => {
  return (
    <AngleLeftLightStyled {...props}>
      <svg height={height} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
        <path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" />
      </svg>
    </AngleLeftLightStyled>
  )
}

const AngleLeftLightStyled = styled(IconStyled)``
