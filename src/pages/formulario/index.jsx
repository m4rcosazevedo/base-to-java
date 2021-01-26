import React from 'react'
import FormFactory from '../../components/form_factory'

const Formulario = () => {
  const data = [
    {
      name: 'Fazer login',
      items: [
        {
          name: 'email',
          placeholder: 'Digite seu e-mail*',
          validations: 'emailRequired',
          component: 'Input',
          value: '',
          title: 'E-mail',
          type: 'text'
        },
        {
          name: 'password',
          placeholder: 'Digite sua senha*',
          validations: 'passwordMinRequired',
          component: 'InputPassword',
          value: '',
          title: 'Senha'
        },
        {
          name: 'button',
          component: 'Button',
          title: 'Entrar',
          submittingText: 'Entrando'
        }
      ]
    }
  ]

  const handleSubmit = (values) => {

  }

  return (
    <>
      <FormFactory data={data} onSubmit={handleSubmit} />
    </>
  )
}

export default Formulario
