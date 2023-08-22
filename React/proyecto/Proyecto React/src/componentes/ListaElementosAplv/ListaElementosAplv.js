import React from 'react';
import './ListaElementosAplv.css';

function Elemento(props) {
  return <li>{props.valor}</li>;
}

export default function ListaElementosAplv(props) {
    const aplv = props.aplv;
    const ListaElementosAplv = aplv.map((aplvItem, index) => (
      <Elemento key={index} valor={aplvItem} />
    ));

  return (
    <div className="container bg-primary lista-elementos">
      <h2 className="titulo">Alimentos que no debe de comer una persona que padece de APLV</h2>
      <ul className="list-group">
        {ListaElementosAplv}
      </ul>
    </div>
  );
}
