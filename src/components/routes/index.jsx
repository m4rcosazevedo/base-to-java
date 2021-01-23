import React from 'react'
import { BrowserRouter } from 'react-router-dom'
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
import { guardsRoutes } from './utils/functions'
import { AuthLayout, BaseLayout } from '../layouts'
import Route from './route'

const Routes = () => {
  const routes = [
    {
      layout: AuthLayout,
      data: [
        { path: '/login', component: SignIn },
        { path: '/criar-nova-senha', component: CreateNewPassword },
        { path: '/cadastre-se', component: SignUp },
        { path: '/confirmar-usuario', component: ConfirmSignUp },
        { path: '/esqueci-minha-senha', component: ForgotPassword },
        { path: '/recuperar-senha', component: PasswordRecovery },
        { path: '/sair', component: Logout },
        { path: '/403', component: NoAuthorization },
        { path: '/5:number', component: ServerErrors }
      ]
    },
    {
      layout: BaseLayout,
      data: [
        { path: '/', component: Home },
        { path: '/404', component: PageNotFound },
        { path: '*', component: PageNotFound }
      ]
    }
  ]

  return (
    <BrowserRouter>
      <GuardProvider guards={[guardsRoutes]} error={PageNotFound}>
        <Route data={routes} />
      </GuardProvider>
    </BrowserRouter>
  )
}

export default Routes
