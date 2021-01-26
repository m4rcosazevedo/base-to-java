import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import { Box } from '../../components/ui/components'
import { useAlertBox } from '../../contexts'
import { goToUrl } from '../../utils/go_to_url'
import { exceptionsError } from '../../utils/cognito_erros'
import { settings } from '../../configs/settings'
import FormFactory from '../../components/form_factory'

const CreateNewPassword = () => {
  const history = useHistory()
  const { alertBox } = useAlertBox()

  const states = history.location.state
  const email = states ? states.email : ''
  const password = states ? states.password : ''

  const data = [
    {
      name: 'Cadastrar nova senha',
      items: [
        {
          name: 'password',
          placeholder: 'Nova senha*',
          validations: 'passwordWithMatches',
          component: 'InputPassword'
        },
        {
          name: 'confirmPassword',
          placeholder: 'Nova senha*',
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

  if (!email) return null

  return (
    <Box>
      <FormFactory data={data} onSubmit={onSubmit} />
    </Box>
  )
}

export default CreateNewPassword
