import React from 'react'
import PropTypes from 'prop-types'
import { FormInput } from '../form'
import { TplGroup } from '../formik'
import { Field } from 'formik'

const Input = ({ name, title, placeholder, ...el }) => {
  return (
    <TplGroup name={name} title={title}>
      <Field
        type="text"
        name={name}
        placeholder={placeholder || ''}
        onChange={val => {
          if (el.setFieldValue) {
            el.setFieldValue(name, val.currentTarget.value)
          }
        }}
        as={FormInput}
      />
    </TplGroup>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string
}
export default Input
