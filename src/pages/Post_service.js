import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'

function Post_service() {
    const validationsSchema = yup.object().shape({
        title: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        price: yup.number().typeError('Должно быть числом').required('Обязательно'),
        category: yup.string().typeError('Должно быть выбрано').required('Обязательно')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    price: '',
                    category: '',
                }}
                validateOnBlur
                onSubmit={(values) => {
                    console.log(values)
                    fetch("http://localhost:3001/service", {
                        method: "post",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            title: values.title,
                            price: values.price,
                            category: values.category
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
                            <label htmlFor={`title`}>Услуга</label><br />
                            <input
                                type={`text`}
                                name={`title`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                        </p>
                        {touched.title && errors.title && <p>{errors.title}</p>}
                        <p>
                            <label htmlFor={`price`}>Цена</label><br />
                            <input
                                type={`text`}
                                name={`price`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                        </p>
                        {touched.price && errors.price && <p>{errors.price}</p>}
                        <p>
                            <label htmlFor={`category`}>Категория</label><br />
                            <select
                                name="category"
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ display: 'block' }}
                            >
                                <option value="" label="Select a category" />
                                <option value="CREATIVE" label="CREATIVE" />
                                <option value="HYGIENE" label="HYGIENE" />
                                <option value="CLEANING" label="CLEANING" />
                                <option value="HAIRCUT" label="HAIRCUT" />
                            </select>
                            {errors.category &&
                                touched.category &&
                                <div className="input-feedback">
                                    {errors.category}
                                </div>}
                        </p>
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={`submit`}
                        >Добавить услугу</button>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default Post_service