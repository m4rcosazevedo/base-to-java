import styled from 'styled-components'
import PropTypes from 'prop-types'

export const FormLabel = styled.label.attrs(props => ({
  htmlFor: props.htmlFor
}))``

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired
}
