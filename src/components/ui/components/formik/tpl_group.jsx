import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormErrorMessage, FormLabel } from '../form'
import { ErrorMessage } from 'formik'

const TplGroup = ({ name, title, children }) => {
  return (
    <FormControl>
      {title && <FormLabel htmlFor={name}>{title}</FormLabel>}
      {children}
      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  )
}

TplGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default TplGroup
