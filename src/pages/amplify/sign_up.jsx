import React from 'react'
import { Auth, I18n } from 'aws-amplify'
import { Box } from '../../components/ui/components/box'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Heading } from '../../components/ui/components/heading'
import { Input, InputPassword } from '../../components/ui/components/formik'
import { Button } from '../../components/ui/components/buttons'
import { goToUrl } from '../../utils/go_to_url'
import { useHistory } from 'react-router-dom'
import { useAlertBox } from '../../contexts'
import { exceptionsError } from '../../utils/cognito_erros'
import { settings } from '../../configs/settings'

const SignUp = () => {
  const history = useHistory()
  const { alertBox } = useAlertBox()
  const initialValues = {
    name: '',
    // phone: '',
    // code: '55',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const onSubmit = async (values) => {
    try {
      const { password } = values
      const email = values.email.toLowerCase()
      const name = values.name
      // const phone = values.phone.replace(/\D/g, '')

      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          name: name
          // phone_number: phone ? `+${values.code ? values.code : '55'}${phone}` : ''
        }
      })

      alertBox(I18n.get('AlertSendCode'))
      goToUrl(history, '/confirmar-usuario', { email, password })
      await Auth.signIn(email, password)
      goToUrl(history, settings.dashboardRoute)
    } catch (error) {
      alertBox(exceptionsError(error.code, error.message))
    }
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(I18n.get('ValidateRequiredField')),
          // phone: Yup.string().required(I18n.get('ValidateRequiredField')),
          email: Yup.string().email(I18n.get('ValidateInvalidEmail')).required(I18n.get('ValidateRequiredField')),
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
        })}
        onSubmit={onSubmit}
      >
        {(actions) => (
          <Form>
            <Heading>Faça seu cadastro</Heading>

            <Input name="name" placeholder="Digite seu nome" {...actions} />
            <Input name="email" placeholder="Digite seu e-mail" {...actions} />
            {/* <InputPhoneWithCode placeholder="Digite seu celular" {...actions} /> */}
            <InputPassword name="password" placeholder="Digite uma senha" {...actions} />
            <InputPassword name="confirmPassword" placeholder="Confirmar senha" {...actions} />

            <Button type="submit">{actions.setSubmitting ? 'Cadastrar' : 'Salvando...'}</Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default SignUp
