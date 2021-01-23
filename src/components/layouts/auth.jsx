import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AuthLayout = ({ children }) => {
  return (
    <>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/404">404</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      {children}
    </>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthLayout
