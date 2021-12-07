import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

function Post_worker() {
  const validationsSchema = yup.object().shape({
    firstName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    lastName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    middleName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  })
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          middleName: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values)
          fetch("http://localhost:3001/worker", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify( {
              firstName: values.firstName,
              lastName: values.lastName,
              middleName: values.middleName
            })
          })
          .then(res => res.json())
          .then(
            (result) => {
              
             console.log(result)
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              
              console.log(error)
            }
          )
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div>
            <p>
              <label htmlFor={`firstName`}>Имя</label><br />
              <input
                type={`text`}
                name={`firstName`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            </p>
            {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
            <p>
              <label htmlFor={`lastName`}>Фамилия</label><br />
              <input
                type={`text`}
                name={`lastName`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </p>
            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
            <p>
              <label htmlFor={`middleName`}>Отчество</label><br />
              <input
                type={`text`}
                name={`middleName`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.middleName}
              />
            </p>
            {touched.middleName && errors.middleName && <p>{errors.middleName}</p>}
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >Добавить работника</button>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default Post_worker