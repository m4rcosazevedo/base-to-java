import * as Yup from 'yup'
import { I18n } from 'aws-amplify'

export const getValidationSchemaByName = (name) => {
  switch (name) {
    case 'inputRequired':
      return Yup.string()
        .required(I18n.get('ValidateRequiredField'))
    case 'emailRequired':
      return Yup.string()
        .email(I18n.get('ValidateInvalidEmail'))
        .required(I18n.get('ValidateRequiredField'))
    case 'passwordMinRequired':
      return Yup.string()
        .min(8, I18n.get('ValidateMinPassword'))
        .required(I18n.get('ValidateRequiredField'))
    default: throw new Error(`Validation ${name} don't found`)
  }
}
