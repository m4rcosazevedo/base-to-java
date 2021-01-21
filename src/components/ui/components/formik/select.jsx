import React from 'react'
import PropTypes from 'prop-types'
import { FormInput } from '../form'

const Select = ({ children, ...props }) => {
  return (
    <FormInput as="select" {...props}>
      {children}
    </FormInput>
  )
}

Select.propTypes = {
  children: PropTypes.node.isRequired
}

export default Select
