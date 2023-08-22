import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ContactForm from '../formularioContacto/formularioContacto';
import Body from '../body/body';
import ListaElementosAplv from '../ListaElementosAplv/ListaElementosAplv';



export default function menuNavegacion (){
    return (
      <Router>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/productos">Productos</Link>
              </li>
              <li>
                <Link to="/informacion">Información</Link>
              </li>
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>



        <Switch>
          <Route path="/"><Inicio /></Route>
          <Route path="/productos"><Productos></Productos></Route>
          <Route path="/informacion" ><Informacion></Informacion></Route>
          <Route path="/servicios" ><Servicios></Servicios></Route>
          <Route path="/contacto" ><Contacto></Contacto> </Route>
        </Switch>
      </Router >
    );
  
}

function Inicio() {

  return <h2>INICIO</h2>;

}

function Productos() {

  return <h2>PRODUCTOS</h2>;

}

function Informacion() {

  return <h2>Información</h2>;

}

function Servicios() {

  return <h2>Servicios</h2>;

}

function Contacto() {
  return <h2>Contacto</h2>;

  // return <ContactForm></ContactForm>;

}


