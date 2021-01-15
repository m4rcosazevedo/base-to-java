import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../components/ui/components'
import { Row, Col } from '../../components/ui/layout'

const Home = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Container>
        <Row>
          <Col w={['100%', '50%', '33.3333%']}>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
          <Col w={['100%', '50%', '33.3333%']}>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
          <Col w={['100%', '50%', '33.3333%']}>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
          <Col w={['100%', '50%', '33.3333%']}>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
