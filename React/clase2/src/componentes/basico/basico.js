import React from 'react';
import { Formik } from 'formik';

const Basico = () => (
  <div>
    <h1>Formulario con Formik!</h1>
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* otros */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="correo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.correo}
          />
          {errors.correo && touched.correo && errors.correo}
          <input
            type="password"
            name="clave"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.clave}
          />
          {errors.clave && touched.clave && errors.clave}
          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basico;