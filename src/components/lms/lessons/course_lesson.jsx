import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '../../ui/components'
import { AccordionLesson } from './_partials'
import { getProgressCourse } from '../courses/utils/helpers'
import { Row, Col } from '../../ui/layout'

const CourseLesson = ({ currentLessonIndex, courseId, lesson, activeLesson, onCurrentLesson }) => {
  // eslint-disable-next-line no-console
  console.log(courseId, lesson, activeLesson, onCurrentLesson)

  const contents = lesson.lesson_contents
  const [progress] = useState(getProgressCourse(lesson.lesson_stats))
  const [currentContent, setCurrentContent] = useState(null)
  const hasContent = (activeLesson && currentContent != null && !!contents.length)

  const onActiveContent = async (index) => {
    if (currentContent === 0 || currentContent !== index) {
      // await loadContent(index)
    }
  }

  const onActiveLesson = async () => {
    onCurrentLesson(currentLessonIndex)
    setCurrentContent(0)
    if (!activeLesson) {
      // setQuestions
      await onActiveContent(0)
    }
  }

  return (
    <Box mb={10} pos="relative">
      <AccordionLesson
        title={lesson.title}
        active={activeLesson}
        progress={progress}
        lessonNumber={currentLessonIndex + 1}
        onActiveLesson={onActiveLesson}
      />
      {hasContent && (
        <Box>
          <h2>{lesson.title}</h2>

          <p>Video {currentContent + 1} de {contents.length}</p>

          <Row>
            <Col xs={12} md={4} xl={3} />
          </Row>
        </Box>
      )}
    </Box>
  )
}

CourseLesson.propTypes = {
  currentLessonIndex: PropTypes.number.isRequired,
  courseId: PropTypes.number.isRequired,
  lesson: PropTypes.object.isRequired,
  activeLesson: PropTypes.bool.isRequired,
  onCurrentLesson: PropTypes.func.isRequired
}

export default CourseLesson
