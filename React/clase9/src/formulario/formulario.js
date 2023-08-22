// Formulario.js

import React, { useRef } from 'react';
import actualizarResultado from '../redux/store/resultado/action'
import { connect } from 'react-redux';

const Formulario = ({ actualizarResultado }) => {
    const resultadoRef = useRef(null);
    const onButtonClick = () => {
        actualizarResultado(resultadoRef.current.value);
    }
    return (
        <div>
            Campo:
            <input type="text" ref={resultadoRef} />
            <button onClick={onButtonClick}>Guardar en Store</button>
        </div>
    );

}

// Se conecta con Redux: null = indica si desea recuperar algo de la "store"
export default connect(null, { actualizarResultado })(Formulario);