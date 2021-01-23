import React from 'react'
import { Route as ReactRoute, Switch } from 'react-router-dom'
import { GuardedRoute } from 'react-router-guards'
import PropTypes from 'prop-types'

const Route = ({ data }) => {
  return (
    <Switch>
      {data.map(({ layout: Layout, data: item }, index) => (
        <ReactRoute key={index} path={item.map(i => i.path)}>
          <Layout>
            <Switch>
              {item.map(({ path, component, ...route }, idx) => (
                <GuardedRoute
                  key={`${index}-${idx}`}
                  path={path}
                  component={component}
                  {...route}
                  exact={route.exact || true}
                />
              ))}
            </Switch>
          </Layout>
        </ReactRoute>
      ))}
    </Switch>
  )
}

Route.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    layout: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired.isRequired,
      exact: PropTypes.bool,
      meta: PropTypes.object
    })).isRequired
  })).isRequired
}

export default Route
