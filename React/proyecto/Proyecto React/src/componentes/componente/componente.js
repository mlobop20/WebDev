import React from 'react';
import { useHookHttp } from '../useHookHttp/useHookHttp';
import { Usuario } from '../usuario/usuario';


export const Componente = () => {
    const [usuarios] = useHookHttp('https://jsonplaceholder.typicode.com/photos');

    return (
        <div className='container d-flex flex-wrap'>
            <h1>Usuarios</h1>
            {usuarios.map(usuario => (
                <Usuario key={usuario.id} usuario={usuario} />
            ))}
        </div>
    );
};
