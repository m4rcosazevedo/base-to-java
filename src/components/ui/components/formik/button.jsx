import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonUI } from '../../components'

const Button = ({ title, submittingText, isSubmitting }) => {
  return (
    <ButtonUI type="submit">{!isSubmitting ? title : submittingText}</ButtonUI>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  submittingText: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

export default Button
