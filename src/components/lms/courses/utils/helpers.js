const getEvaluation = (evaluations, type) => {
  const evals = evaluations.filter(e => e.type === type)
  return evals.length ? evals[0] : null
}

export const getRatings = (evaluations, defaultRating = 5, ofUser = false) => {
  const val = getEvaluation(evaluations, 'RATING')
  if (val) {
    return ofUser ? val.userEvaluationValue : val.average
  }

  return defaultRating
}

export const getProgressCourse = (courseStats) => {
  return courseStats.length ? courseStats[0].progress : 0
}
