import styled from 'styled-components'
import PropTypes from 'prop-types'
import { applyProps, propTypesStyledHTML } from '../../../../utils/styled_helpers'

export const Flex = styled.div`
  display: flex;
  ${(props) => applyProps(props)}
`

Flex.propTypes = {
  ...propTypesStyledHTML,
  flexWrap: PropTypes.oneOf(['wrap', 'wrap-reverse', 'nowrap']),
  flexDir: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'normal', 'stretch']),
  alignContent: PropTypes.oneOf(['stretch', 'center', 'flex-end', 'flex-start', 'space-between', 'space-around']),
  justifyItems: PropTypes.oneOf(['baseline', 'center', 'end', 'flex-end', 'flex-start', 'left', 'legacy', 'normal', 'right', 'revert', 'self-end', 'self-start', 'start', 'stretch']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])
}
