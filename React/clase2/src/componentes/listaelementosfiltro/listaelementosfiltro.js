import React from 'react';
import './listaelementosfiltro.css';


function Elemento(props) {
    return <li>Elemento{props.valor}</li>
}


export default function ListaElementosFiltro(props) {
    const enteros = props.enteros;
    const listaElementos = enteros.map((entero) => <Elemento key={entero.toString()} valor={entero}></Elemento>);
    //const listaElementosSecundarios = enteros.map((entero) => <Elemento key={entero.toString()} valor={entero}></Elemento>);
    return (
        <div>
            <h2>Elementos</h2>
            <ul>

                {listaElementos.filter(elemento => elemento.props.valor > 5).map(
                    elemento => (
                        elemento
                    )
                )}

            </ul>
            { listaElementos.filter(elemento => elemento.props.valor == 7) }

        </div>
    );
}
