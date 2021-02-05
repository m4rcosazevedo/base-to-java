import styled from 'styled-components'

export const IconStyled = styled.i`
  line-height: 1;
  cursor: ${({ clicked }) => clicked ? 'pointer' : 'default'};
`
