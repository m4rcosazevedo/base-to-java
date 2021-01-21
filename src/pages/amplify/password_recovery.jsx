import React from 'react'
import { Auth, I18n } from 'aws-amplify'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import * as queryString from 'query-string'
import { Heading } from '../../components/ui/components/heading'
import { Input, InputMasked, InputPassword } from '../../components/ui/components/formik'
import { Button } from '../../components/ui/components/buttons'
import { useHistory } from 'react-router-dom'
import { Box } from '../../components/ui/components/box'
import { useAlertBox } from '../../contexts'
import { settings } from '../../configs/settings'
import { exceptionsError } from '../../utils/cognito_erros'

const PasswordRecovery = () => {
  const { alertBox } = useAlertBox()
  const history = useHistory()
  const query = queryString.parse(history.location.search)
  const state = history.location.state
  const email = (state && 'email' in state) ? state.email : query.email
  const initialValues = {
    email: email || '',
    code: query.code || '',
    password: '',
    confirmPassword: ''
  }

  const onSubmit = async (values) => {
    const email = values.email.toLowerCase()
    const code = values.code.toString()
    const { password } = values

    try {
      await Auth.forgotPasswordSubmit(email, code, password)
      alertBox(I18n.get('PasswordUpdatedSuccess'))
      await Auth.signIn(email, password)
      history.replace(settings.dashboardRoute)
    } catch (error) {
      alertBox(exceptionsError(error.code, error.message))
    }
  }

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={
          Yup.object().shape({
            email: Yup.string()
              .email(I18n.get('ValidateInvalidEmail'))
              .required(I18n.get('ValidateRequiredField')),
            code: Yup.string()
              .required(I18n.get('ValidateRequiredField'))
              .matches(/[0-9]/, I18n.get('ValidateOnlyNumbers')),
            password: Yup.string()
              .required(I18n.get('ValidateRequiredField'))
              .min(8, I18n.get('ValidateMinPassword'))
              .max(24, I18n.get('ValidateMaxPassword'))
              .matches(/[a-z]/, I18n.get('ValidateOneLowerChar'))
              .matches(/[A-Z]/, I18n.get('ValidateOneUpperChar'))
              .matches(/[0-9]/, I18n.get('ValidateOneNumber'))
              .matches(/[!@#$%*()_/\\\-+^&{}:;?.]/, I18n.get('ValidateOneSpecialChar')),
            confirmPassword: Yup.string().when('password', {
              is: (val) => val && val.length >= 8,
              then: Yup.string()
                .oneOf([Yup.ref('password')], I18n.get('ValidatePasswordNotEquals'))
                .required(I18n.get('ValidateRequiredField'))
            })
          })
        }
        onSubmit={onSubmit}
      >
        {(actions) => (
          <Form>

            <Heading>Recuperar senha</Heading>

            <Input name="email" defaultValue={initialValues.email} placeholder="E-mail" {...actions} />
            <InputMasked name="code" placeholder="Código" mask="999999" defaultValue={initialValues.code} {...actions} />
            <InputPassword name="password" placeholder="Digite uma senha" {...actions} />
            <InputPassword name="confirmPassword" placeholder="Confirmar senha" {...actions} />
            <Button type="submit">{actions.setSubmitting ? 'Entrar' : 'Entrando'}</Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default PasswordRecovery
