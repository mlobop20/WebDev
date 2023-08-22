
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function SaludoAtenticado(props) {
    return <h1>Bienvenido {props.nombre}!</h1>;
  }
  
function SaludoInvitado(props) {
    return <h1>Inicie sesión por favor.</h1>;
}

function restar(a, b)
{
    return a - b;
}

class BasicoE extends React.Component {
    estaAutenticado = false;
// Formik configura internamente estados para almacenar los "inputs"
// de usuario en los "initialValues", por lo cual no es necesario}
// inicializar el estado en el constructor

// Con Formik tampoco es necesario crear nuestros propios métodos
// de "handleChange" ya que esta librería se encarga de eso

sumar(a, b)
{
    return a + b;
}

render() {
    return (
<Formik
  initialValues={{ correo: "", clave: ""}}
  validate={values => {
    let errors = {};
    if (values.correo === "") {
      errors.correo = "El correo electrónico es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
      errors.correo = "El formato del correo electrónico es incorrecto";
    }
    if (values.clave === "") {
      errors.clave = "La clave es requerida";
    } else if (values.clave.length < 4) {
      errors.clave = "La clave debe tener al menos 4 caracteres";
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    alert("Formulario validado y enviado con éxito.");
    this.estaAutenticado = true;
    values.correo = "";
    values.clave = "";
    setSubmitting(false);
  }}
>
  {(touched, errors, isSubmitting) => (
   <Form>

   {this.estaAutenticado ? null : (
    <div>
      <div className="form-group">
        <label htmlFor="correo">Correo Electrónico</label>
        {/* Los componentes extra como los "Field" se encargan de sincronizar
         el estado de Formik con los "value" de los "inputs" */}
        <Field
          type="email"
          name="correo"
          className={`form-control ${
            touched.correo && errors.correo ? "is-invalid" : ""
          }`}
        />  
        <ErrorMessage
            component="div"
            name="correo"
            className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="clave">Clave</label>
        <Field
          type="password"
          name="clave"
          className="form-control"
        />
        <ErrorMessage
            component="div"
            name="clave"
            className={`form-control ${
                touched.clave && errors.clave ? "is-invalid" : ""
            }`}
            />  
      </div>
      <button type="submit" disabled={isSubmitting}>
            Enviar
      </button>
      <br />
      </div>
      )}
      Suma: { this.sumar(1, 2)}
      <br/>
      Resta: { restar(5, 1)}
      {this.estaAutenticado ? <SaludoAtenticado nombre={this.props.nombre} /> : <SaludoInvitado />}
    
    </Form>
  )}
</Formik>
    )    
    }
}

export default BasicoE;