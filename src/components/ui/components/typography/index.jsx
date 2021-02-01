import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const renderTypography = (attr) => {
  switch (attr) {
    case 'h1': return css``
    case 'h2': return css``
    case 'h3': return css``
    default: return css``
  }
}

export const Typography = styled.div.attrs(props => ({
  as: props.attr
}))`
  ${(props) => renderTypography(props.attr)}
`

Typography.defaultProps = {
  attr: 'div'
}

Typography.propTypes = {
  attr: PropTypes.oneOf(['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5'])
}
