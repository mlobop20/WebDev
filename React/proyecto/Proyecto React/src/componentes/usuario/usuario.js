import React from 'react';

export const Usuario = ({ usuario }) => (
    <div className="d-flex p-2 bd-highlight">
    <h2>{usuario.title}</h2>
        <img className='img-thumbnail rounded' src={usuario.url}></img>
    </div>


);


