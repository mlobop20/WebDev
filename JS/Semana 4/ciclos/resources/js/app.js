import { input, div, h1, th, table, tr, td } from './html.js'
import { Persona } from './persona.js';

window.addEventListener('load', main)
function main() {
    // var estudiantes = ['Maikol', 'Karina', 'Luis'];

    var boxesContainer = document.getElementById('boxesContainer');
    //var contador=0;

    // for (let contador = 0; contador < estudiantes.length; contador++) {
    //     const estudiante = estudiantes[contador];
    //     console.log('Corriendo', estudiante)

    // }


    //for each
    // estudiantes.forEach(porCadaelemento);
    // function porCadaelemento(estudiante, index){
    //     console.log(estudiante,index);
    // }

    // estudiantes.forEach(estudiante => {
    //     console.log(estudiante)
    // });

    // estudiantes.every(enCadaEstudiante);
    // function enCadaEstudiante(estudiante,index){
    //     if (index === 2) {
    //         return false;       
    //     }
    //     console.log(estudiante)
    //     return true;
    // }

    // var esteban = {
    //     nombre: 'Esteban',
    //     apellido: 'Perez',
    //     email: 'm@amazon.com',
    //     hobbies: ['Play', 'Walk'],
    //     correr: function () {
    //         console.log('Esteban corre');
    //     }
    // }

    // var juan = {
    //     nombre: 'Juan',
    //     apellido: 'Lobo',
    //     email: 'ma@amazon.com',
    //     hobbies: ['Plays', 'Walks']
    // }

    var maikol = new Persona('Maikol', 'Lobos', 'maik@hotmail.com', ['Volar', 'comer']);
    maikol.correr()
    var juan = new Persona('Juan', 'Lobo', 'juan@hotmail.com', ['Nadar', 'Correr']);
    juan.correr();

    var estudiantes = [maikol, juan]
    // for (const key in esteban) {
    //     console.log(key)
    //     console.log(esteban[key])//imprime lo que hay en hobbies
    // }

    //var atributos = { className: 'red_box', id: 'titleName' }

    h1(document.body, { id: 'mainTitle', className: 'main_title', innerHTML: 'H1 JS Ciclos' })
    div(boxesContainer, { className: 'red_box', id: 'titleName', innerHTML: 'Red' });
    div(boxesContainer, { className: 'blue_box', id: 'blueBox', innerHTML: 'Blue' });
    div(boxesContainer, { className: 'green_box', id: 'greenBox', innerHTML: 'Green' });

    var myInput = input(document.body, { id: 'myInput', placeholder: 'Box color' });



    //forIn
    // for (const key in esteban) {
    //     console.log(key)
    //     console.log(esteban[key])
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



