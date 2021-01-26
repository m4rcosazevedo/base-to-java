import React from 'react'
import PropTypes from 'prop-types'
import { Form, Formik } from 'formik'
import CallInputs from './call_inputs'
import { getInitialValues, getValidationSchema } from './utils/util'
import { Heading } from '../ui/components/heading'

const FormFactory = ({ data, onSubmit, children }) => {
  const validationSchema = getValidationSchema(data)
  const initialValues = getInitialValues(data)

  const options = {
    enableReinitialize: true,
    initialValues,
    onSubmit
  }

  if (validationSchema) Object.assign(options, { validationSchema })

  return (
    <Formik {...options}>
      {(actions) => (
        <Form>
          {children || data.map(({ name, items }, idx) => (
            <div key={idx}>
              {name && <Heading>{name}</Heading>}
              {items.filter(item => item.component).map((item, index) => (
                <CallInputs key={`${idx}-${index}`} {...item} {...actions} />
              ))}
            </div>
          ))}
        </Form>
      )}
    </Formik>
  )
}

FormFactory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.string,
      title: PropTypes.string,
      submittingText: PropTypes.string,
      placeholder: PropTypes.string,
      validations: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string
    })).isRequired
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default FormFactory
