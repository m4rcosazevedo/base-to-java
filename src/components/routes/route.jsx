import React from 'react'
import { GuardedRoute } from 'react-router-guards'
import PropTypes from 'prop-types'
import { BaseLayout } from '../layouts'

const Route = ({ component: Component, layout: Layout = BaseLayout, ...rest }) => {
  return (
    <GuardedRoute
      {...rest} render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

Route.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func
}

export default Route
