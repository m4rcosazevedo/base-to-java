import React from 'react'
import { useAlertBox } from '../../../../contexts'
import {
  AlertDialogBody,
  AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay
} from './alert_box_styled'
import { Button } from '../../components'

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
          <Button onClick={handleClose}>Ok</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  )
}

export default AlertBox
