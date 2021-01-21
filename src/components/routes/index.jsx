import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { GuardProvider } from 'react-router-guards'
import { Home, PageNotFound } from '../../pages'
import { requireLogin } from './utils/functions'
import Route from './route'
import AmplifyRoutes from './amplify_routes'

const Routes = () => {
  return (
    <BrowserRouter>
      <GuardProvider guards={[requireLogin]} error={PageNotFound}>
        <Switch>
          <Route path="/" exact component={Home} />
          <AmplifyRoutes />

        </Switch>
      </GuardProvider>
    </BrowserRouter>
  )
}

export default Routes
