import React from 'react'
import PropTypes from 'prop-types'

const AuthLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthLayout
