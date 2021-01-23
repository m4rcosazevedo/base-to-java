import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { GuardProvider } from 'react-router-guards'
import {
  ConfirmSignUp,
  CreateNewPassword,
  ForgotPassword,
  Home, Logout, NoAuthorization,
  PageNotFound, PasswordRecovery, ServerErrors,
  SignIn,
  SignUp
} from '../../pages'
import { requireLogin } from './utils/functions'
import Route from './route'
import { AuthLayout } from '../layouts'

const Routes = () => {
  return (
    <BrowserRouter>
      <GuardProvider guards={[requireLogin]} error={PageNotFound}>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/login" exact component={SignIn} layout={AuthLayout} />
          <Route path="/criar-nova-senha" exact component={CreateNewPassword} layout={AuthLayout} />
          <Route path="/cadastre-se" exact component={SignUp} layout={AuthLayout} />
          <Route path="/confirmar-usuario" exact component={ConfirmSignUp} layout={AuthLayout} />
          <Route path="/esqueci-minha-senha" exact component={ForgotPassword} layout={AuthLayout} />
          <Route path="/recuperar-senha" exact component={PasswordRecovery} layout={AuthLayout} />
          <Route path="/sair" exact component={Logout} layout={AuthLayout} />

          <Route path="/403" component={NoAuthorization} layout={AuthLayout} />
          <Route path="/404" component={PageNotFound} layout={AuthLayout} />

          <Route path="/5:number" component={ServerErrors} layout={AuthLayout} />
          <Route path="/*" component={PageNotFound} layout={AuthLayout} />

        </Switch>
      </GuardProvider>
    </BrowserRouter>
  )
}

export default Routes
