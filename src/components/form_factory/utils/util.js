import { getValidationSchemaByName } from './validations.map'
import * as Yup from 'yup'

export const getInitialValues = (groups) => {
  const initialValues = {}

  groups.forEach(group => {
    'items' in group && group.items.forEach(item => {
      Object.assign(initialValues, {
        [item.name]: item.value || ''
      })
    })
  })

  return initialValues
}

const mapValidationSchema = (validations) => {
  const yupValidation = {}
  Object.keys(validations).forEach(key => {
    Object.assign(yupValidation, {
      [key]: getValidationSchemaByName(validations[key])
    })
  })

  return yupValidation
}

export const getValidationSchema = (groups) => {
  const validations = {}

  groups.forEach(group => {
    'items' in group && group.items.forEach(item => {
      if (item.validations) {
        Object.assign(validations, {
          [item.name]: item.validations
        })
      }
    })
  })
  const validationSchema = mapValidationSchema(validations)

  return Object.keys(validationSchema).length ? Yup.object().shape(validationSchema) : null
}
