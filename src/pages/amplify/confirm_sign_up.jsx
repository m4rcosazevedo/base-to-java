import React from 'react'
import { Auth, I18n } from 'aws-amplify'
import { Link, useHistory } from 'react-router-dom'
import { Box, Button, Flex, Heading } from '../../components/ui/components'
import { Input, InputMasked } from '../../components/ui/components/formik'
import * as queryString from 'query-string'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useAlertBox } from '../../contexts'
import { goToUrl } from '../../utils/go_to_url'
import { settings } from '../../configs/settings'
import { exceptionsError } from '../../utils/cognito_erros'

const ConfirmSignUp = () => {
  const history = useHistory()
  const { alertBox } = useAlertBox()
  const query = queryString.parse(history.location.search)
  const state = history.location.state
  const email = state ? state.email : query.email
  const password = state ? state.password : ''
  const initialValues = {
    email: email || '',
    code: query.code || ''
  }

  const resendConfirmationCode = async () => {
    try {
      const currentEmail = document.getElementsByName('email')[0]
      await Auth.resendSignUp(email || currentEmail.value)
      alertBox(I18n.get('ResendSignUpSuccess'))
    } catch (error) {
      alertBox(I18n.get('ResendSignUpFail'))
    }
  }

  const onSubmit = async (values, actions) => {
    try {
      await Auth.confirmSignUp(values.email, values.code)
      if (password) {
        await Auth.signIn(values.email, password)
        goToUrl(history, settings.dashboardRoute)
      } else {
        alertBox(I18n.get('UserSuccessfullyVerified'))
        goToUrl(history, '/login', { email: values.email })
      }
    } catch (e) {
      actions.setFieldValue('code', '')
      alertBox(exceptionsError(e.code, e.message))
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
              .matches(/[0-9]/, I18n.get('ValidateOnlyNumbers'))
          })
        }
        onSubmit={onSubmit}
      >
        {(actions) => (
          <Form>
            <Heading>Confirmar código</Heading>

            <Input
              name="email"
              placeholder="Digite seu e-mail*"
              defaultValue={initialValues.email}
              disabled={!!email}
              {...actions}
            />
            <InputMasked
              name="code"
              placeholder="Código"
              mask="999999"
              defaultValue={initialValues.code}
              {...actions}
            />

            <Button type="submit">{actions.setSubmitting ? 'Entrar' : 'Entrando'}</Button>
          </Form>
        )}
      </Formik>

      <Flex justifyContent="space-around" mb={8}>
        <Box>
          <div onClick={resendConfirmationCode}>Reenviar código?</div>
        </Box>
        <Box>
          <Link to="/login">Fazer Login</Link>
        </Box>
      </Flex>

    </Box>
  )
}

export default ConfirmSignUp
