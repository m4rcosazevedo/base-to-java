import React, { useState } from 'react'
import { Box, Typography } from '../../components'
import { Icon } from '../../../../assets/icons'
import PropTypes from 'prop-types'
import { Accordion as AccordionStyled, Body, Header } from './styled'

const Accordion = ({ title, subtitle, children }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(prev => !prev)
  }

  return (
    <AccordionStyled on={click.toString()} onClick={handleClick}>
      <Header>
        {title && <Typography attr="h1">{title}</Typography>}
        {subtitle && <Typography attr="div">{subtitle}</Typography>}
        <Icon name={click ? 'angle-down-light' : 'angle-right-light'} />
      </Header>
      <Body mb="30px" opacity={click ? '1' : '0'}>
        <Box p={['20px', '40px']} d={click ? 'block' : 'none'}>
          {children}
        </Box>
      </Body>
    </AccordionStyled>
  )
}

Accordion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}

export default Accordion
