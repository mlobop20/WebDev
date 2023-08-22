import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'El nombre es obligatorio';
    }

    if (!values.email) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Correo electrónico inválido';
    }

    if (!values.message) {
      errors.message = 'El mensaje es obligatorio';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
<Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
      <Form className="container flex-column flex-wrap justify-content-center">
        <div className="m-2">
          <label  className=' pe-5 ' htmlFor="name">Nombre: </label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>

        <div className="m-2">
          <label className=' pe-5 '  htmlFor="email">Correo Electrónico: </label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>

        <div className="m-2"> 
          <label htmlFor="message" className=' pe-5 '>Mensaje: </label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" className="error-message" />
        </div>

        <button className='btn btn-danger' type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
