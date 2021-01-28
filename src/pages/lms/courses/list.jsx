import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeCoursesList } from '../../../main/factories'
import Loading from '../../../components/loading'
import { Link } from 'react-router-dom'
import { settings } from '../../../configs/settings'
import queryString from 'query-string'

const CoursesList = ({ location }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const search = queryString.parse(location.search)
  const { perPage } = settings
  const [totalItems, setTotalItems] = useState(0)
  const currentPage = ('page' in search) && search.page > 1 ? parseInt(search.page, 10) : 1

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const content = await makeCoursesList({
        'order[highlight asc, courses.published_at]': 'desc',
        page: (currentPage - 1),
        perPage
      })

      setData(content.data)
      setTotalItems(content.totalItems)
      setLoading(false)
    })()
  }, [currentPage])

  if (loading) return <Loading />

  return (
    <>
      {data.length
        ? data.map(item => (
          <p key={item.id}>
            <Link to={`/cursos/${item.slug}`}>{item.title}</Link>
          </p>
          ))
        : (
          <p>Nenhum registro foi encontrado</p>
          )}

      {data.length > 0 && totalItems > perPage && (
        <div>
          {currentPage > 1 && (
            <Link to={`/cursos?${queryString.stringify({
              ...search,
              page: currentPage - 1
            })}`}
            >Anterior
            </Link>
          )}
          {currentPage * perPage < totalItems && (
            <Link to={`/cursos?${queryString.stringify({
              ...search,
              page: currentPage + 1
            })}`}
            >Próxima
            </Link>
          )}
        </div>
      )}
    </>
  )
}

CoursesList.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.any
  }).isRequired
}
export default CoursesList
