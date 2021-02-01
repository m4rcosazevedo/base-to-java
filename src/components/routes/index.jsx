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
  SignUp,
  CoursesList, CoursesView
} from '../../pages'
import { guardsRoutes } from './utils/functions'
import { AuthLayout, BaseLayout } from '../layouts'
import Route from './route'
import Formulario from '../../pages/formulario'

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
        { path: '/5:number', component: ServerErrors },
        { path: '/formulario', component: Formulario }
      ]
    },
    {
      layout: BaseLayout,
      data: [
        { path: '/', component: Home, meta: { auth: true } },
        { path: '/cursos', component: CoursesList, meta: { auth: true } },
        { path: '/cursos/:slug', component: CoursesView, meta: { auth: true } },
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
