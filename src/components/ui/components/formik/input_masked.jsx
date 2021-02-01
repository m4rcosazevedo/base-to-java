import React from 'react'
import { FormInput } from '../form'
import { Field } from 'formik'
import PropTypes from 'prop-types'
import TplGroup from './tpl_group'
import InputMask from 'react-input-mask'

const InputMasked = ({ name, mask, title, placeholder, ...el }) => {
  return (
    <TplGroup name={name} title={title}>
      <Field name={name}>
        {({ field }) => (
          <InputMask
            {...field}
            placeholder={placeholder || ''}
            maskChar=""
            mask={mask}
            onChange={e => {
              if (el.setFieldValue) {
                el.setFieldValue(name, e.target.value)
              }
            }}
          >
            {inputProps => <FormInput {...inputProps} />}
          </InputMask>
        )}
      </Field>
    </TplGroup>
  )
}

InputMasked.propTypes = {
  mask: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputMasked
