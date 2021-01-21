import React from 'react'
import Route from './route'
import {
  ConfirmSignUp,
  CreateNewPassword,
  ForgotPassword,
  Logout,
  PasswordRecovery,
  SignIn,
  SignUp
} from '../../pages'
import { AuthLayout } from '../layouts'

const AmplifyRoutes = () => {
  return (
    <>
      <Route path="/login" exact component={SignIn} layout={AuthLayout} />
      <Route path="/criar-nova-senha" exact component={CreateNewPassword} layout={AuthLayout} />
      <Route path="/cadastre-se" exact component={SignUp} layout={AuthLayout} />
      <Route path="/confirmar-usuario" exact component={ConfirmSignUp} layout={AuthLayout} />
      <Route path="/esqueci-minha-senha" exact component={ForgotPassword} layout={AuthLayout} />
      <Route path="/recuperar-senha" exact component={PasswordRecovery} layout={AuthLayout} />
      <Route path="/sair" exact component={Logout} layout={AuthLayout} />
    </>
  )
}

export default AmplifyRoutes
