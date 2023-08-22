import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './body.css';
import Reloj from '../reloj/reloj';
import SaludoSegunHora from '../saludo/saludo';
import { Card } from 'reactstrap';
import Tarjetas from '../tarjetas/tarjetas';
import Recetass from '../recetas/recetas';

export default class Body extends Component {
  render() {
    return (
      <div className="body">


        <div className="container-fluid mt-3">
          <div className="d-flex">
            <div className="col-sm-10 p-3 text-black">
              <h1>Bienvenid@ a la mejor fuente de información sobre la alergia a la proteina de la leche de vaca.</h1>
              <h3 className='my-5'>Acá podrá encontrar desde información hasta recetas y recomendaciones sobre el manejo de esta alergia así como un área para dejarnos sus comentarios y aportes a la pagina.</h3>
            </div>
            <div className="col-sm-2 p-3 bg-primary text-black">Publicidad</div>
          </div>
        </div>
      <div className='container'>
      <Recetass></Recetass>
      </div>

      </div>
    )
  }
}
