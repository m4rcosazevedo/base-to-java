import React, { useEffect } from 'react'
import { Auth, I18n } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import { Box, Button, Heading } from '../../components/ui/components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { InputPassword } from '../../components/ui/components/formik'
import { useAlertBox } from '../../contexts'
import { goToUrl } from '../../utils/go_to_url'
import { exceptionsError } from '../../utils/cognito_erros'
import { settings } from '../../configs/settings'

const CreateNewPassword = () => {
  const history = useHistory()
  const { alertBox } = useAlertBox()

  const states = history.location.state
  const email = states ? states.email : ''
  const password = states ? states.password : ''

  const initialValues = {
    password: '',
    confirmPassword: ''
  }

  useEffect(() => {
    if (!email) {
      history.replace('/login')
    }
  }, [history])

  const onSubmit = async (values) => {
    try {
      const user = await Auth.signIn(email, password)
      try {
        await Auth.completeNewPassword(user, values.password)
        try {
          await Auth.signIn(email, values.password)
          goToUrl(history, settings.dashboardRoute)
        } catch (error) {
          goToUrl(history, '/login')
        }
      } catch (err) {
        alertBox(exceptionsError(err.code, err.message))
      }
    } catch (e) {
      goToUrl(history, '/login')
    }
  }

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={
          Yup.object().shape({
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

            <Heading>Cadastrar nova senha</Heading>

            <InputPassword name="password" placeholder="Nova senha" {...actions} />
            <InputPassword name="confirmPassword" placeholder="Confirmar senha" {...actions} />

            <Button type="submit">{actions.setSubmitting ? 'Cadastrar' : 'Cadastrando'}</Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default CreateNewPassword
