import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonUI } from '../../components'

const Button = ({ title, submittingText, setSubmitting }) => {
  return (
    <ButtonUI type="submit">{setSubmitting ? title : submittingText}</ButtonUI>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  submittingText: PropTypes.string.isRequired,
  setSubmitting: PropTypes.func.isRequired
}

export default Button
