import styled from 'styled-components'
import { applyProps, propTypesStyledHTML } from '../../../../utils/styled-helpers'

export const Box = styled.div`
  ${(props) => applyProps(props)}
`

Box.propTypes = {
  ...propTypesStyledHTML
}
