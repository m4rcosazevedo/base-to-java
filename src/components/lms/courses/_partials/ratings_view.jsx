import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RatingsView = ({ rating, onUpdateRating }) => {
  const stars = 5

  const handleClick = async (n) => {
    await onUpdateRating(n)
  }

  return (
    <RatingsViewStyled>
      {[...Array(stars).keys()].reverse().map(i => (
        <React.Fragment key={i}>
          <input
            type="radio"
            id={`${i + 1}star`}
            name="rating"
            onClick={() => handleClick(i + 1)}
            defaultChecked={rating === i + 1}
          />
          <label htmlFor={`${i + 1}star`} title={`Avaliar com ${i + 1} estrelas`} />
        </React.Fragment>
      ))}
    </RatingsViewStyled>
  )
}

RatingsView.propTypes = {
  rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
  onUpdateRating: PropTypes.func.isRequired
}

export default RatingsView

const RatingsViewStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  > input {
    display: none;
  }
  
  > input:checked ~ label,
  &:not(:checked) > label:hover,
  &:not(:checked) > label:hover ~ label {
    color: #ffd862;
    cursor: pointer;
    &:before {
      content: '\\2605';
    }
  }

  > label {
    color: #ffd862;
    margin-left: 2px;
    &:before {
      font-family: 'fontello', sans-serif;
      font-size: 18px;
      display: inline-block;
      content: '\\2606';
    }

    &:checked + label:hover,
    &:checked ~ label:hover,
    &:hover ~ input:checked ~ label,
    &:checked ~ label:hover ~ label {
      color: #ffaa00;
    }
  }
`
