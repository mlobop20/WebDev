
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BasicoF = () => (
  <div>
    <h1>Formulario con Formik y Componentes Extra!</h1>
    <Formik
      initialValues={{ correo: '', clave: '' }}
      validate={values => {
        const errors = {};
        if (!values.correo) {
          errors.correo = 'Requerido';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
        ) {
          errors.correo = 'Dirección de correo electrónico incorrecta';
        }
        if (!values.clave) {
            errors.clave = 'Requerida';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 4000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="correo" />
          <ErrorMessage name="correo" component="div" />
          <Field type="password" name="clave" />
          <ErrorMessage name="clave" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default BasicoF;
