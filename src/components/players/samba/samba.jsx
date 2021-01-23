import React from 'react'
import PropTypes from 'prop-types'
import LoadScript from 'react-load-script'
import { AspectRatioBox } from '../../ui/components'
import { postUserCollectionViews } from '../../../main/usecases/user_collection_views'

const SambaVideo = ({ reference, playerKey, contentId, view, userIri }) => {
  const idPlayer = 'player'
  let flag = false

  const dispatchActionView = async (currentProgress, duration) => {
    if (userIri && contentId && !flag && currentProgress > view.progress) {
      flag = true
      const percent = currentProgress / (duration / 100000)

      await postUserCollectionViews(
        userIri,
        Math.round(percent),
        contentId,
        (view && ('watched' in view) && view.watched))
    }
  }

  const eventListener = async (player) => {
    const eventParam = parseInt(player.eventParam, 10)

    switch (player.event) {
      case 'onListen':
        if (!flag && eventParam > 1 && eventParam % 15 === 0) {
          await dispatchActionView(eventParam, player.duration)
        } else if (!flag && eventParam > 1 && eventParam % 15 === 0) {
          flag = false
        }
        break
      case 'onFinish':
        await dispatchActionView(player.duration / 1000, player.duration)
        break
      default: break
    }
  }

  const clearPlayer = () => {
    const item = window.document.getElementById(idPlayer)
    if (item) {
      item.innerHTML = ''
    }
  }

  const init = () => {
    const playerParams = {
      enableShare: false
    }

    if (view && view.progress && !view.watched) {
      Object.assign(playerParams, {
        resume: view.progress
      })
    }

    clearPlayer()

    ;(() => new window.SambaPlayer(idPlayer, {
      ph: playerKey,
      m: reference,
      playerParams,
      events: {
        '*': eventListener
      }
    }))()
  }

  return (
    <>
      <LoadScript url="https://player.sambatech.com.br/v3/samba.player.api.js" onLoad={init} />
      <AspectRatioBox id={idPlayer} />
    </>
  )
}

SambaVideo.propTypes = {
  reference: PropTypes.string.isRequired,
  playerKey: PropTypes.string.isRequired,
  contentId: PropTypes.string.isRequired,
  userIri: PropTypes.string.isRequired,
  view: PropTypes.shape({
    progress: PropTypes.number,
    watched: PropTypes.bool
  }).isRequired
}

export default SambaVideo
