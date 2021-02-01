import styled from 'styled-components'
import PropTypes from 'prop-types'
import { applyProps, propTypesStyledHTML } from '../../../../utils/styled_helpers'

export const Box = styled.div`
  ${(props) => applyProps(props)}
`

Box.propTypes = {
  ...propTypesStyledHTML,
  pos: PropTypes.oneOf(['relative', 'absolute', 'static']),
  opacity: PropTypes.string
}
