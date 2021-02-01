import React from 'react'
import styled from 'styled-components'

export const AngleDownLight = (props) => {
  return (
    <AngleDownLightStyled {...props}>
      <svg height="30" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
        <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" />
      </svg>
    </AngleDownLightStyled>
  )
}

const AngleDownLightStyled = styled.i`

`
