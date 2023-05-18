import { input, div, h1, th, table, tr, td, button } from './html.js'
import { Persona } from './persona.js';

window.addEventListener('load', main)
function main() {

    var formDatos = document.getElementById('formDatos');
    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var correoIn = document.getElementById('correoIn');
    var fondosIn = document.getElementById('fondosIn');
    var mensualidadIn = document.getElementById('mensualidadIn');
    var guardarBtn = document.getElementById('guardarBtn');
    var cancelarBtn = document.getElementById('cancelarBtn');


    var maikol = new Persona('Maikol', 'Lobos', 'maik@hotmail.com', ['Volar', 'comer']);
    var juan = new Persona('Juan', 'Lobo', 'juan@hotmail.com', ['Nadar', 'Correr']);

    var estudiantes = [maikol, juan]



    function guardarInfo() {
        console.log('hola')
    }
   guardarInfo();


    h1(formDatos, { id: 'mainTitle', className: 'main_title', innerHTML: 'Cliente' })
    input(formDatos, { id: 'nombreIn', className: 'm-1', placeholder: 'Nombre' });
    input(formDatos, { id: 'apellidoIn', className: 'm-1', placeholder: 'Apellido' });
    input(formDatos, { id: 'correoIn', className: 'm-1', placeholder: 'E-mail' });
    input(formDatos, { id: 'fondosIn', className: 'm-1', placeholder: 'Fondos disponibles' });
    input(formDatos, { id: 'mensualidadIn', className: 'm-1', placeholder: 'Mensualidad' });
    button(formDatos, { id: 'guardarBtn', className: 'btn btn-primary m-1', innerHTML: 'Enviar' });
    button(formDatos, { id: 'cancelarBtn', className: 'btn btn-danger m-1', innerHTML: 'Cancelar', onclick:'guardarInfo()'});



    // guardarBtn.onclick = function () {
    //     guardarInfo();
    // }



    var estudiantesTable = table(document.body, { className: 'estudiantes_Table' });
    var tableRow = tr(estudiantesTable);
    var tableHeader = th(tableRow, { innerHTML: 'Nombre' })
    var tableHeader = th(tableRow, { innerHTML: 'Apellido' })
    var tableHeader = th(tableRow, { innerHTML: 'Email' })
    estudiantes.every(estudiante => {
        var tableRow = tr(estudiantesTable);
        var tableData = td(tableRow, { innerHTML: estudiante.nombre });
        tableData = td(tableRow, { innerHTML: estudiante.apellido });
        tableData = td(tableRow, { innerHTML: estudiante.email });
        return true;
    });




}