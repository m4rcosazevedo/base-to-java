import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Accordion from '../../ui/layout/accordion'
import { Container, Typography } from '../../ui/components'
import { settings } from '../../../configs/settings'
import { Favorites, ProgressCourse, RatingsView } from './_partials'
import { getFavorites, getProgressCourse, getRatings } from './utils/helpers'
import { updateEvaluation } from '../../../main/domains'
import { useAlertBox } from '../../../contexts'
import { Col, Row } from '../../ui/layout'
import CourseLesson from '../lessons/course_lesson'

const CourseView = ({ data }) => {
  const { alertBox } = useAlertBox()
  const contentIri = `/lms/courses/${data.id}`
  const [ratingUser, setRatingUser] = useState(getRatings(data.evaluations, 0, true))
  const [progress] = useState(getProgressCourse(data.course_stats))
  const [favoriteUser, setFavoriteUser] = useState(getFavorites(data.evaluations))

  const [currentLesson, setCurrentLesson] = useState(null)

  const onUpdateEvaluation = async (value, type) => {
    return await updateEvaluation({
      content_iri: contentIri,
      value,
      type
    })
  }

  const onUpdateRating = async (value) => {
    try {
      await onUpdateEvaluation(value, 'RATING')
      setRatingUser(value)
    } catch (_) {
      alertBox('Ocorreu um erro ao avaliar o curso')
      setRatingUser(prev => prev)
    }
  }

  const onUpdateFavorite = async () => {
    try {
      await onUpdateEvaluation(1, 'FAVORITE')
      setFavoriteUser(v => !v)
    } catch (_) {
      alertBox('Ocorreu um erro ao favoritar o curso')
    }
  }

  const onCurrentLesson = async (index) => {
    setCurrentLesson(p => p === index ? null : index)
  }

  return (
    <Container>
      <Accordion title={data.title} subtitle="Ver informações do cursos">
        <div dangerouslySetInnerHTML={{ __html: data.summary }} />
      </Accordion>

      <Row mb={30}>
        {settings.courses.view.ratings && (
          <Col w={['100%', '33.3333%']}>
            <Typography>Avalie este curso</Typography>
            <RatingsView rating={ratingUser} onUpdateRating={onUpdateRating} />
          </Col>
        )}
        {settings.courses.view.totalProgress && (
          <Col w={['100%', '33.3333%']}>
            <ProgressCourse title="Progresso total do curso" progress={progress} />
          </Col>
        )}
        {settings.courses.view.favorites && (
          <Col w={['100%', '33.3333%']}>
            <Favorites
              title="Adicione aos favoritos"
              favorite={!!favoriteUser}
              onUpdateFavorite={onUpdateFavorite}
            />
          </Col>
        )}
      </Row>

      {data.lessons.map((lesson, index) => (
        <CourseLesson
          key={`lesson-${lesson.id}-${index}`}
          currentLessonIndex={index}
          courseId={data.id}
          lesson={lesson}
          activeLesson={currentLesson === index}
          onCurrentLesson={onCurrentLesson}
        />
      ))}
    </Container>
  )
}

CourseView.propTypes = {
  data: PropTypes.object.isRequired
}

export default CourseView
