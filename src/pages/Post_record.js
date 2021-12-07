import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

function Post_record() {
    const validationsSchema = yup.object().shape({
        user: yup.number().typeError('Должно быть строкой').required('Обязательно'),
        worker: yup.number().typeError('Должно быть строкой').required('Обязательно'),
        date: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        time: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        service: yup.number().typeError('Должно быть строкой').required('Обязательно'),
        //category: yup.string().typeError('Должно быть выбрано').required('Обязательно')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    user: '',
                    worker: '',
                    date: '',
                    time: '',
                    service: '',
                }}
                validateOnBlur
                onSubmit={(values) => {
                    console.log(values)
                    fetch("http://localhost:3001/record", {
                        method: "post",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            user: values.user,
                            worker: values.worker,
                            date: values.date,
                            time: values.time,
                            service: values.service
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
                            <label htmlFor={`user`}>Пользователь</label><br />
                            <input
                                type={`text`}
                                name={`user`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.user}
                            />
                        </p>
                        {touched.user && errors.user && <p>{errors.user}</p>}
                        <p>
                            <label htmlFor={`worker`}>Мастер</label><br />
                            <input
                                type={`text`}
                                name={`worker`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.worker}
                            />
                        </p>
                        {touched.worker && errors.worker && <p>{errors.worker}</p>}
                        <p>
                            <label htmlFor={`date`}>Дата</label><br />
                            <input
                                type={`text`}
                                name={`date`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date}
                            />
                        </p>
                        {touched.date && errors.date && <p>{errors.date}</p>}
                        <p>
                            <label htmlFor={`time`}>Время</label><br />
                            <input
                                type={`text`}
                                name={`time`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.time}
                            />
                        </p>
                        {touched.time && errors.time && <p>{errors.time}</p>}
                        <p>
                            <label htmlFor={`service`}>Услуга</label><br />
                            <input
                                type={`text`}
                                name={`service`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.service}
                            />
                        </p>
                        {touched.service && errors.service && <p>{errors.service}</p>}
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={`submit`}
                        >Добавить запись</button>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default Post_record