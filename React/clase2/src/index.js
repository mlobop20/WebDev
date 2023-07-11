

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Reloj from './componentes/reloj/reloj';
import reportWebVitals from './reportWebVitals';



// function presentarHoraActual(){

//   const elemento = (
//   <div>
//     <h1>Hola Mundo!</h1>
//     <p>La hora actual es {new Date().toLocaleTimeString()}.</p>
//   </div>
// );
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(elemento);

// }

// setInterval(presentarHoraActual, 1000);

// const elementoDOM = <div></div>;

// function Saludo(props){
//   return <h1>Bienvenido(a) {props.nombre}</h1>;
// }

// const elementoUsuario = <Saludo nombre="María" apellido="Salas" />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(elementoUsuario);

// function Iteración(){
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     // root.render(<Reloj nombre="José" fechab={new Date()}/>);
//     root.render(<Reloj nombre="José" />);    
// }

// setInterval(Iteración, 1000);
 

// function Iteración(){
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     //root.render(<Reloj nombre="José" fechab={new Date()}/>);
//     root.render(<Reloj nombre="José" />);    
// }

// setInterval(Iteración, 1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App></App>);    

reportWebVitals();
