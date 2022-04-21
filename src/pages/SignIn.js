import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const validationsSchema = yup.object().shape({
    login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно')
  })
  return (
    <div style={{display: 'flex', alignContent: "center", alignItems: "center", justifyContent: "center"}}>
      <Formik
        initialValues={{
          login: '',
          password: ''
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values)
          fetch("http://localhost:3001/signin", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify( {
              login: values.login,
              password: values.password
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
          <div style={{display: 'flex', alignContent: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column'}}>
            <p>
              <label htmlFor={`login`}>Логин</label><br />
              <input
                type={`text`}
                name={`login`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
              />
            </p>
            {touched.login && errors.login && <p>{errors.login}</p>}
            <p>
              <label htmlFor={`password`}>Пароль</label><br />
              <input
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <div>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >Войти</button>
            <Link to = '/SignUp'>
              <button>Зарегистрироваться</button>
            </Link>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default SignIn