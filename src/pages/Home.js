import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

function Home() {
  const validationsSchema = yup.object().shape({
    firstName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    lastName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    middleName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    phone: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
    confirmEmail: yup.string().email('Введите верный email').oneOf([yup.ref('email')], 'Email не совпадают').required('Обязательно')
  })
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          middleName: '',
          login: '',
          phone: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: ''
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values)
          fetch("http://localhost:3001/login", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify( {
              firstName: values.firstName,
              lastName: values.lastName,
              middleName: values.middleName,
              login: values.login,
              phone: values.phone,
              password: values.password,
              email: values.email
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
              <label htmlFor={`phone`}>Телефон</label><br />
              <input
                type={`phone`}
                name={`phone`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
            </p>
            {touched.phone && errors.phone && <p>{errors.phone}</p>}
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
            <p>
              <label htmlFor={`confirmPassword`}>Подтвердить пароль</label><br />
              <input
                type={`password`}
                name={`confirmPassword`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </p>
            {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <p>
              <label htmlFor={`email`}>Почта</label><br />
              <input
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <p>
              <label htmlFor={`confirmEmail`}>Подтвердить почту</label><br />
              <input
                type={`email`}
                name={`confirmEmail`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
              />
            </p>
            {touched.confirmEmail && errors.confirmEmail && <p>{errors.confirmEmail}</p>}
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >Добавить пользователя</button>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default Home