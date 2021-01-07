import styled from 'styled-components'

export const AlertDialogOverlay = styled.div`
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 70;
`

export const AlertDialogContent = styled.div`
  position: fixed;
  width: 100%;
  max-width: 420px;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 71;
`

export const AlertDialogHeader = styled.div``

export const AlertDialogBody = styled.div`
  padding: 10px;
`

export const AlertDialogFooter = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row-reverse;
`
