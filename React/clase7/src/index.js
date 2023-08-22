import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import EnrutamientoAnidado from './enrutamientoAnidado/enrutamientoAnidado';
import EnrutamientoNavegacion from './enrutamientonavegacion/enrutamientonavegacion';
import EnrutamientoParametros from './enrutamientoparametros/enrutamientoparametros';
import { HookEstado } from './hookEstado/hookEstado';
import { HookEstadoMultiple } from './hookEstadoMultiple/hookEstadoMultiple';
import { HookEfecto } from './hookEfecto/hookEfecto';
import { Componente } from './componente/componente';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Componente />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
