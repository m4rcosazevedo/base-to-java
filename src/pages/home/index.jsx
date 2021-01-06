import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      Home
    </>
  )
}

export default Home
