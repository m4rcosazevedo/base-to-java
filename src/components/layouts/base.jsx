import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BaseLayout = ({ children }) => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <>Header</>
      <hr />
      {children}
      <hr />
      <>Footer</>
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default BaseLayout
