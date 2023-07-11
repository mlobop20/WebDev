import './encabezado.css';

function Encabezado(props) {
    return (
        <div>
            <div className='Encabezado'>
                <h1>{props.titulo} </h1>
                <h2>{props.autor.nombre}</h2>
                <h2>{props.autor.puesto}</h2>
            </div>
        </div>
    );
}


export default Encabezado;