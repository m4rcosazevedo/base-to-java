import React from 'react'
import { Auth, I18n } from 'aws-amplify'
import { Box } from '../../components/ui/components/box'
import { goToUrl } from '../../utils/go_to_url'
import { useHistory } from 'react-router-dom'
import { useAlertBox } from '../../contexts'
import { exceptionsError } from '../../utils/cognito_erros'
import { settings } from '../../configs/settings'
import FormFactory from '../../components/form_factory'

const SignUp = () => {
  const history = useHistory()
  const { alertBox } = useAlertBox()

  const data = [
    {
      name: 'Faça seu cadastro',
      items: [
        {
          name: 'name',
          placeholder: 'Digite seu nome*',
          validations: 'inputRequired',
          component: 'Input'
        },
        {
          name: 'email',
          placeholder: 'Digite seu e-mail*',
          validations: 'emailRequired',
          component: 'Input'
        },
        /* { name: 'code' },
        {
          name: 'phone',
          placeholder: 'Digite seu telefone*',
          validations: 'inputRequired',
          component: 'InputPhoneWithCode'
        }, */
        {
          name: 'password',
          placeholder: 'Digite sua senha*',
          validations: 'passwordWithMatches',
          component: 'InputPassword'
        },
        {
          name: 'confirmPassword',
          placeholder: 'Confirme sua senha*',
          validations: 'confirmPassword',
          component: 'InputPassword'
        },
        {
          name: 'button',
          component: 'Button',
          title: 'Cadastrar',
          submittingText: 'Cadastrando'
        }
      ]
    }
  ]

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
      <FormFactory data={data} onSubmit={onSubmit} />
    </Box>
  )
}

export default SignUp
