
// FormularioContador.css
// FormularioContador.js

import React, {useRef} from 'react';
import { aumentarContador, disminuirContador } from '../redux/store/contador/action'
import { connect } from 'react-redux';
import { selectActiveContador } from '../redux/store/contador/reducer';

const FormularioContador = ({contador, aumentarContador, disminuirContador}) => {  
       const onButtonAumentarClick = () => {
        aumentarContador(contador);        
       }
       const onButtonDisminuirClick = () => {
        disminuirContador(contador);        
      }
        return (
          <div>
            <button onClick={onButtonAumentarClick}>Aumentar Contador</button>
            <br/>Valor: {contador}<br/>
            <button onClick={onButtonDisminuirClick}>Disminuir Contador</button>
          </div>
        );
  }
  
  const mapStateToProps = state => {
    return {
      contador: selectActiveContador(state)
    }
  }
  
// Se conecta con Redux: recuperando y enviando parámetros al "store"
export default connect(mapStateToProps, {aumentarContador, disminuirContador}) (FormularioContador);


