import React, { Component } from 'react'
import './contexto.css';


export default class Contexto extends Component {


    render(){
        let {filtro} = this.props;
        return (
            <div>
                <h1>Ejemplo Contexto "this"</h1>
                <input onChange={filtro} />
                {/* <input onChange={filtro.bind(this)} /> */}
            </div>
        );
    }

}