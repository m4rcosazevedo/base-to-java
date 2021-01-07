import React from 'react'
import { useAlertBox } from '../../../../contexts/alert_box'
import {
  AlertDialogBody,
  AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay
} from './alert_box_styled'

const AlertBox = () => {
  const { content, open, setContent, setOpen } = useAlertBox()

  const handleClose = () => {
    setOpen(false)
    setContent(null)
  }

  if (!open) return null

  return (
    <>
      <AlertDialogOverlay onClick={handleClose} />
      <AlertDialogContent>
        <AlertDialogHeader />
        <AlertDialogBody>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </AlertDialogBody>
        <AlertDialogFooter>
          <button onClick={handleClose}>Ok</button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  )
}

export default AlertBox
