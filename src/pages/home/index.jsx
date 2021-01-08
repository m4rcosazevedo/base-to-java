import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../components/ui/components'

const Home = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Container>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Container>
    </>
  )
}

export default Home
