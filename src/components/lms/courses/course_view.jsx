import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Accordion from '../../ui/layout/accordion'
import { Box, Typography } from '../../ui/components'
import { settings } from '../../../configs/settings'
import { ProgressCourse, RatingsView } from './_partials'
import { getProgressCourse, getRatings } from './utils/helpers'
import { updateEvaluation } from '../../../main/domains'
import { useAlertBox } from '../../../contexts'

const CourseView = ({ data }) => {
  const { alertBox } = useAlertBox()
  const [ratingUser, setRatingUser] = useState(getRatings(data.evaluations, 0, true))
  const onUpdateRating = async (value) => {
    try {
      await updateEvaluation({ content_iri: `/lms/courses/${data.id}`, value, type: 'RATING' })
      setRatingUser(value)
    } catch (_) {
      alertBox('Ocorreu um erro ao avaliar o curso')
      setRatingUser(prev => prev)
    }
  }
  const [progress] = useState(getProgressCourse(data.course_stats))
  // eslint-disable-next-line no-console
  console.log(data)

  return (
    <>
      <Accordion title={data.title} subtitle="Ver informações do cursos">
        <div dangerouslySetInnerHTML={{ __html: data.summary }} />
      </Accordion>

      <Box>
        {settings.courses.view.ratings && (
          <Box>
            <Typography>Avalie este curso</Typography>
            <RatingsView rating={ratingUser} onUpdateRating={onUpdateRating} />
          </Box>
        )}
        {settings.courses.view.totalProgress && (
          <Box>
            <ProgressCourse title="Progresso total do curso" progress={progress} />
          </Box>
        )}
      </Box>

    </>
  )
}

CourseView.propTypes = {
  data: PropTypes.object.isRequired
}

export default CourseView
