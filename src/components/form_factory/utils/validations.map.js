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
    case 'passwordWithMatches':
      return Yup.string()
        .required(I18n.get('ValidateRequiredField'))
        .min(8, I18n.get('ValidateMinPassword'))
        .max(24, I18n.get('ValidateMaxPassword'))
        .matches(/[a-z]/, I18n.get('ValidateOneLowerChar'))
        .matches(/[A-Z]/, I18n.get('ValidateOneUpperChar'))
        .matches(/[0-9]/, I18n.get('ValidateOneNumber'))
        .matches(/[!@#$%*()_/\\\-+^&{}:;?.]/, I18n.get('ValidateOneSpecialChar'))
    case 'confirmPassword':
      return Yup.string().when('password', {
        is: (val) => val && val.length >= 8,
        then: Yup.string()
          .oneOf([Yup.ref('password')], I18n.get('ValidatePasswordNotEquals'))
          .required(I18n.get('ValidateRequiredField'))
      })
    default: throw new Error(`Validation ${name} don't found`)
  }
}
