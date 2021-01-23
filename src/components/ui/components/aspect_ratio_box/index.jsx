import styled from 'styled-components'
import PropTypes from 'prop-types'

const aspectRatio = (ratio = 4 / 3) => {
  return 1 / ratio * 100 + '%'
}

export const AspectRatioBox = styled.div`
  position: relative;

  &:before {
    content: '';
    height: 0;
    display: block;
    padding-bottom: ${(props) => aspectRatio(props.ratio)}
  }

  > * {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

AspectRatioBox.propTypes = {
  ratio: PropTypes.number
}
