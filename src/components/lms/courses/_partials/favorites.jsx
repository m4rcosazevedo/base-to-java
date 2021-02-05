import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '../../../ui/components'
import { Icon } from '../../../../assets/icons'

const Favorites = ({ title, favorite, onUpdateFavorite }) => {
  const handleUpdateFavorite = () => {
    onUpdateFavorite()
  }

  return (
    <Flex alignItems="center">
      {title && <Box mr={5}>{title}</Box>}
      <Box onClick={handleUpdateFavorite}>
        <Icon name={favorite ? 'heart-full' : 'heart'} height={20} clicked />
      </Box>
    </Flex>
  )
}

Favorites.propTypes = {
  onUpdateFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
  title: PropTypes.string
}

export default Favorites
