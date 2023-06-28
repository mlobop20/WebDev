import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Saludo(props) {
  return <h1>Bienvenido {props.nombre} {props.apellido}</h1>;
}

const elementoDom = <div></div>;

const elementoUsuario = <Saludo nombre="Maikol" apellido="Lobo"></Saludo>





  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   elementoUsuario
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
