import React from 'react'
import PropTypes from 'prop-types'
import ComponentsList from './components_list'

const CallInputs = ({ component, ...rest }) => {
  const Component = ComponentsList[component]

  if (!Component) return null

  return (
    <Component {...rest} />
  )
}

CallInputs.propTypes = {
  component: PropTypes.string.isRequired
}

export default CallInputs
