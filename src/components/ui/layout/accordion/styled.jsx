import { Box } from '../../components'
import styled from 'styled-components'

export const Accordion = styled.div`

`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  > h1 {
    width: 50%;  
  }
  > div {
    margin-left: auto;
  }
  > i {
    cursor: pointer;
    width: 30px;
    text-align: center;
    height: 30px;
    margin-left: 5px;  
  }
`

export const Body = styled(Box)`
  transition: all .3s ease;
  height: ${({ opacity }) => parseInt(opacity, 10) ? '100%' : 0};
`
