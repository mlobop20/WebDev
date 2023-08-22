import React from 'react';
import './listaelementos.css';


function Elemento(props) {
    return <li>Elemento{props.valor}</li>
}


export default function ListaElementos(props) {
    const enteros = props.enteros;
    const listaElementos = enteros.map((entero) => <Elemento key={entero.toString()} valor={entero}></Elemento>);
    const listaElementosSecundarios = enteros.map((entero) => <Elemento key={entero.toString()} valor={entero}></Elemento>);
    return (
        <div><ul>
            {listaElementos}
        </ul><ul>
                {listaElementosSecundarios}
            </ul></div>
    );
}
