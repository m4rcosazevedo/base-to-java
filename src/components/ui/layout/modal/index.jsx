import React from 'react'
import { useModalBox } from '../../../../contexts'
import {
  ModalDialogBody, ModalDialogClose,
  ModalDialogContent, ModalDialogFooter,
  ModalDialogHeader, ModalDialogHeaderTitle,
  ModalDialogOverlay
} from './modal_box_styled'

const Modal = () => {
  const { content, open, setContent, setOpen } = useModalBox()

  const handleClose = () => {
    setOpen(false)
    setContent(null)
  }

  if (!open) return null

  return (
    <>
      <ModalDialogOverlay onClick={handleClose} />
      <ModalDialogContent>
        <ModalDialogHeader>
          <ModalDialogHeaderTitle />
          <ModalDialogClose onClick={handleClose}>&times;</ModalDialogClose>
        </ModalDialogHeader>
        <ModalDialogBody>
          {content}
        </ModalDialogBody>
        <ModalDialogFooter />
      </ModalDialogContent>
    </>
  )
}

export default Modal
