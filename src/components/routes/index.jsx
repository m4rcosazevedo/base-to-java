import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { GuardProvider } from 'react-router-guards'
import { Home, PageNotFound, SignIn } from '../../pages'
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

        </Switch>
      </GuardProvider>
    </BrowserRouter>
  )
}

export default Routes
