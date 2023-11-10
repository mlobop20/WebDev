import React from 'react';
import { useHookHttp } from '../useHookHttp/useHookHttp';
import { Usuario } from '../usuario/usuario';
import { FixedSizeList as List } from 'react-window';



export const Componente = () => {
    const [usuarios] = useHookHttp('https://jsonplaceholder.typicode.com/photos');
    const Rows = () => usuarios.map((usuario) =>
        <div className="d-flex p-2 bd-highlight">
            <h2>{usuario.title}</h2>
            <img className='img-thumbnail rounded' src={usuario.url}></img>
        </div>
    );
    return (

        <div className='container d-flex flex-wrap'>
            <h1>Usuarios</h1>
            <List
                className="List"
                height={800}
                itemCount={10}
                itemSize={35}
                width={1200}
            >
                {Rows}
            </List>
            {/* {usuarios.map(usuario => (
                <Usuario key={usuario.id} usuario={usuario} /> */}
            {/* ))} */}
        </div>
    );
};