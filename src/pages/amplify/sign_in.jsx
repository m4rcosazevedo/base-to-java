import React, { useEffect, useState } from 'react'
import { Auth, I18n } from 'aws-amplify'
import { Box, Button, Flex, Heading } from '../../components/ui/components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Input, InputPassword } from '../../components/ui/components/formik'
import { Link, useHistory } from 'react-router-dom'
import * as queryString from 'query-string'
import { useAlertBox } from '../../contexts'
import { exceptionsError } from '../../utils/cognito_erros'
import { settings } from '../../configs/settings'
import { goToUrl } from '../../utils/go_to_url'
import Loading from '../../components/loading'
import { createCookieAdmin } from '../../utils/cookies'
import { clearStorage } from '../../utils/clear_storage'

const SignIn = () => {
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const search = queryString.parse(history.location.search)
  const isAdmin = 'adm' in search
  const { alertBox } = useAlertBox()
  const initialValues = {
    email: '',
    password: ''
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await Auth.currentSession()

        if (isAdmin) {
          createCookieAdmin(response.getIdToken().getJwtToken())
          window.location.href = settings.ADMIN_URL
        } else {
          goToUrl(history, settings.dashboardRoute)
        }
      } catch (e) {
        clearStorage()
        setLoading(false)
      }
    })()
  }, [history, isAdmin])

  const onSubmit = async (values) => {
    if (values) {
      try {
        const user = await Auth.signIn(values.email.toLowerCase(), values.password)
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          alertBox(exceptionsError('NewPasswordRequired'))
          goToUrl(history, '/criar-nova-senha', values)
        } else if (user.challengeName !== 'PASSWORD_VERIFIER') {
          if (isAdmin) {
            window.location.href = settings.ADMIN_URL
          } else {
            goToUrl(history, settings.dashboardRoute)
          }
        }
      } catch (error) {
        if (error.code === 'UserNotConfirmedException') {
          goToUrl(history, '/confirmar-usuario', values)
        } else if (error.code === 'UserLambdaValidationException') {
          goToUrl(history, '/confirmar-usuario', {
            email: values.email
          })
        } else {
          alertBox(exceptionsError(error.code, error.message))
        }
      }
    }
  }

  if (loading) {
    return <Loading />
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
            password: Yup.string()
              .min(8, I18n.get('ValidateMinPassword'))
              .required(I18n.get('ValidateRequiredField'))
          })
        }
        onSubmit={onSubmit}
      >
        {(actions) => (
          <Form>

            <Heading>Fazer Login</Heading>

            <Input name="email" placeholder="Digite seu e-mail*" {...actions} />
            <InputPassword name="password" placeholder="Senha" {...actions} />

            <Button type="submit">{actions.setSubmitting ? 'Entrar' : 'Entrando'}</Button>
          </Form>
        )}
      </Formik>

      <Flex justifyContent="space-around">
        <Link to="/esqueci-minha-senha">Esqueceu a senha?</Link>
        <Link to="/cadastre-se">Cadastre-se</Link>
      </Flex>
    </Box>
  )
}

export default SignIn
