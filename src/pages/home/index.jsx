import React, { useEffect, useState } from 'react'
import { Box, Container } from '../../components/ui/components'
import { Row, Col } from '../../components/ui/layout'
import { makePage } from '../../main/factories'
import LoadBlocks from '../../components/load_blocks'
import Loading from '../../components/loading'

const Home = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        setContent(await makePage('homepage'))
      } catch (e) {
        throw new Error('Ocorreu um erro ao carregar a página')
      }
    })()
  }, [])

  if (!content) {
    return <Loading />
  }

  return (
    <>
      <Container>
        <Row>
          <Col w={['100%', '50%', '33.3333%']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
          <Col w={['100%', '50%', '33.3333%']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
          <Col w={['100%', '50%', '33.3333%']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
          <Col w={['100%', '50%', '33.3333%']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores dolores doloribus ipsa neque non nulla officiis sed sequi! Dolore expedita magni vero! Aspernatur doloribus dolorum harum laborum voluptatem!</Col>
        </Row>
      </Container>
      <Container>
        <Box>
          <LoadBlocks containers={content.containers} locale="main" />
        </Box>
      </Container>
    </>
  )
}

export default Home
