import styled from 'styled-components'
import { customTheme } from '../../../../styles/theme'

export const Button = styled.button`
  padding: 10px 35px;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
  transition: all .3s ease;
  cursor: pointer;
  font-size: ${customTheme.fontSizes.md};
  background: ${customTheme.colors.blue['200']};
  color: ${customTheme.colors.white};
  &:hover {
    background-color: ${customTheme.colors.blue['700']};
  }
`
