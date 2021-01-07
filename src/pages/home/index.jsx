import React from 'react'
import { Link } from 'react-router-dom'
import { useAlertBox } from '../../contexts/alert_box'

const Home = () => {
  const { alertBox } = useAlertBox()

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      Home

      <button onClick={() => alertBox('Lorem ipsum dolor')}>Alert</button>

    </>
  )
}

export default Home
