import React from 'react'
import { Auth, I18n } from 'aws-amplify'
import { Box, Button, Flex, Heading } from '../../components/ui/components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Input } from '../../components/ui/components/formik'
import { useAlertBox } from '../../contexts'
import { Link, useHistory } from 'react-router-dom'
import { goToUrl } from '../../utils/go_to_url'

const ForgotPassword = () => {
  const history = useHistory()
  const { alertBox } = useAlertBox()
  const initialValues = {
    email: ''
  }

  const changePasswordSubmit = async (values) => {
    try {
      await Auth.forgotPassword(values.email.toLowerCase())
      alertBox(I18n.get('AlertSendCode'))
      history.push({
        pathname: '/recuperar-senha',
        search: history.location.search,
        state: {
          email: values.email.toLowerCase()
        }
      })
    } catch (e) {
      if (e.message === 'Cannot reset password for the user as there is no registered/verified email or phone_number') {
        alertBox(I18n.get('AlertUserNotVerify'))
        goToUrl(history, '/confirmar-usuario', { email: values.email.toLowerCase() })
      } else {
        alertBox(I18n.get('AlertSendCodeError'))
      }
    }
  }

  const onSubmit = async (values) => {
    try {
      await Auth.signIn(values.email, Math.random().toString(30).replace(/[^A-z0-9]+/g, '').substr(0, 8))
    } catch (e) {
      if (e.code === 'UserLambdaValidationException') {
        history.push({
          pathname: '/nova-senha',
          search: history.location.search,
          state: { email: values.email }
        })
      } else {
        await changePasswordSubmit(values)
      }
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
              .required(I18n.get('ValidateRequiredField'))
          })
        }
        onSubmit={onSubmit}
      >
        {(actions) => (
          <Form>

            <Heading>Esqueci minha senha</Heading>

            <Input name="email" placeholder="Digite seu e-mail*" {...actions} />

            <Button type="submit">{actions.setSubmitting ? 'Enviar código' : 'Enviando'}</Button>
          </Form>
        )}
      </Formik>

      <Flex justifyContent="space-around">
        <Link to="/login">Fazer login</Link>
      </Flex>
    </Box>
  )
}

export default ForgotPassword
