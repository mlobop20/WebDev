import Encabezado from '../Encabezado/encabezado';
import './publicacion.css';

function Publicacion(props) {

    return (
        <div>
            <Encabezado titulo="Publicacion Nueva" autor={props.autor}></Encabezado>
            <div className='Contenido'>
                {props.texto}
            </div>
            <div className='Pie'>
                {props.fecha}
            </div>
        </div>
    );
}


export default Publicacion;


