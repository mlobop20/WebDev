import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//--JSX
const elemento = <h1>HOLA</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
const nombre = "Maikol";
const elemento1 = <h1>Hola {nombre}!</h1>;

function formatoNombre(usuario) {
  return usuario.nombre + ' ' + usuario.primer_apellido + ' ' + usuario.segundo_apellido;
}

const usuario = {
  nombre: "Maikol",
  primer_apellido: "Lobo",
  segundo_apellido: "Porras"
}

const elemento2 = (
  <h1>
    Hola {formatoNombre(usuario)}
  </h1>
);


function obtenerSaludo() {
  if (usuario.nombre !== "") {
    return <h1>Hola {formatoNombre(usuario)} </h1>;
  } else {
    return <h1>Hola desconocido</h1>;
  }
}

let i;
let elements = [];

for (let i = 0; i < 5; i++) {
  elements.push(<h2>Elemento: {i + 1}</h2>);

}

function obtenerCalificacion(calificacion) {
  switch (calificacion) {
    case 4:
      return <h1>Calificacion muy baja</h1>
      break;
    case 6:
      return <h1>Calificacion baja</h1>
      break;
    case 8:
      return <h1>Calificacion media</h1>
      break;
    case 10:
      return <h1>Calificacion alta</h1>
      break;
    default:
      return <h1>Calificacion desconocida</h1>
      break;
  }
}

//let calificacion = 4;

const estilo = {'background-color':'yellow'};
const elemento3=<div width="100%" className='campo'>Prueba de atributos</div>;

const elemento4 = (
  <div>
    <h1>Hola {nombre}</h1>
    <h2>Bienvenido al sitio</h2>
    <p>Tiempo actual: <span>{Date()}</span>
    </p>
  </div>
);

root.render(
  //[elemento, elemento1, elemento2, obtenerSaludo()]
  //elements
  //obtenerCalificacion(calificacion)
  elemento4
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
