import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormInput, IcoView } from '../form'
import { Field } from 'formik'
import { Box } from '../box'
import TplGroup from './tpl_group'

const InputPassword = ({ name, title, placeholder, ...el }) => {
  const [viewPass, setViewPass] = useState(false)

  const enableInput = e => {
    e.target.readOnly = false
  }

  return (
    <TplGroup name={name} title={title}>
      <Box pos="relative">
        <Field
          type={viewPass ? 'text' : 'password'}
          name={name}
          placeholder={placeholder || ''}
          onChange={val => {
            if (el.setFieldValue) {
              el.setFieldValue(name, val.target.value)
            }
          }}
          readOnly
          onFocus={enableInput}
          autoComplete="off"
          as={FormInput}
        />
        <IcoView
          role="button"
          aria-label="Exibir conteúdo"
          className={viewPass && 'slash'}
          onClick={() => setViewPass(prev => !prev)}
        />
      </Box>
    </TplGroup>
  )
}

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string
}
export default InputPassword
