import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { customTheme } from '../../../../styles/theme'

const renderHeading = (attr) => {
  switch (attr) {
    case 'h1': return css``
    case 'h2': return css``
    case 'h3': return css``
    default: return css``
  }
}

export const Heading = styled.h2.attrs(props => ({
  as: props.attr
}))`
  margin-bottom: 40px;
  font-weight: bold;
  color: ${customTheme.colors.blue['200']};
  font-size: ${customTheme.fontSizes.xl};
  line-height: 44px;
  ${(props) => renderHeading(props.attr)}
`

Heading.defaultProps = {
  attr: 'h2'
}

Heading.propTypes = {
  attr: PropTypes.oneOf(['h1', 'h2']).isRequired
}
