import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormInput } from '../form'
import { Field } from 'formik'
import { Box, Flex } from '../index'
import InputMask from 'react-input-mask'
import { ddiWithMasks } from '../../../../utils/enums/ddi_masks'
import Select from './select'
import TplGroup from './tpl_group'

const InputPhoneWithCode = ({ title, placeholder, ...el }) => {
  const code = '55'
  const name = 'phone'
  const nameCode = 'code'

  const [mask, setMask] = useState(ddiWithMasks[code] || '(99) 99999-9999')

  const selectMask = (e) => {
    setMask(ddiWithMasks[e.currentTarget.value])
    el.setFieldValue(nameCode, e.currentTarget.value)
    el.setFieldValue(name, '')
  }

  return (
    <TplGroup name={name} title={title}>
      <Flex>
        <Box w="35%" mr="10px">
          <Select onChange={selectMask} defaultValue={code}>
            {Object.keys(ddiWithMasks).map((item, idx) => (
              <option key={`ddi-${idx}`} value={item}>+{item}</option>
            ))}
          </Select>
        </Box>
        <Box w="75%">
          <Field name={name}>
            {({ field }) => (
              <InputMask
                {...field}
                placeholder={placeholder || ''}
                maskChar=""
                mask={mask}
                onChange={e => {
                  if (el.setFieldValue) {
                    el.setFieldValue(name, e.currentTarget.value)
                  }
                }}
              >
                {inputProps => <FormInput {...inputProps} />}
              </InputMask>
            )}
          </Field>
        </Box>
      </Flex>
    </TplGroup>
  )
}

InputPhoneWithCode.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputPhoneWithCode
