import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './body.css';
import Reloj from  '../reloj/reloj';
import SaludoSegunHora from '../saludo/saludo';

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="">
          <SaludoSegunHora></SaludoSegunHora>
          <Reloj></Reloj>

          <h1>Bienvenido a la mejor fuente de información sobre la alergia a la preteina de la leche de vaca</h1>
          <h3>Acá podrá encontrar desde información hasta recetas y recomendaciones sobre el manejo de esta alergia así como un área para dejarnos sus comentarios y aportes a la pagina.</h3>
        </div>

      </div>
    )
  }
}
