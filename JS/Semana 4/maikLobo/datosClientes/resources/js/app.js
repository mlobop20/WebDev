import { input, div, h1, th, table, tr, td, button } from './html.js'
import { Persona } from './persona.js';

window.addEventListener('load', main)
function main() {

    var formDatos = document.getElementById('formDatos');
    h1(formDatos, { id: 'mainTitle', className: 'main_title', innerHTML: 'Cliente' })
    var nombreIn = input(formDatos, { id: 'nombreIn', className: 'm-1', placeholder: 'Nombre' });
    var apellidoIn = input(formDatos, { id: 'apellidoIn', className: 'm-1', placeholder: 'Apellido' });
    var correoIn = input(formDatos, { id: 'correoIn', className: 'm-1', placeholder: 'E-mail' });
    var fondosIn = input(formDatos, { id: 'fondosIn', className: 'm-1', placeholder: 'Fondos disponibles' });
    var mensualidadIn = input(formDatos, { id: 'mensualidadIn', className: 'm-1', placeholder: 'Mensualidad' });
    var guardarBtn = button(formDatos, { type: 'button', id: 'guardarBtn', className: 'btn btn-primary m-1', innerHTML: 'Guardar' });
    var cancelarBtn = button(formDatos, { id: 'cancelarBtn', className: 'btn btn-danger m-1', innerHTML: 'Cancelar' });
    var clientesTabla = table(formDatos, { className: 'clientesTabla' });
    var clienteSelected = null;

    var clientesArray = [];
    clientesArray.push(new Persona('Esteban', 'Padilla', 'ep@mail.com', 100, 10));
    clientesArray.push(new Persona('Juan', 'Perez', 'jp@mail.com', 100, 15));
    clientesArray.push(new Persona('Maria', 'Gomez', 'mg@mail.com', 200, 25));

    actualizarTabla();

    // function guardarInfo() {
    //     var nombre = nombreIn.value;
    //     var apellido = apellidoIn.value;
    //     var correo = correoIn.value;
    //     var fondos = Number(fondosIn.value);
    //     var mensualidad = Number(mensualidadIn.value);

    //     if (nombre === "" || apellido === "" || correo === "" || fondosIn.value === "" || mensualidadIn.value === "") {
    //         alert('Debe de rellenar todos los campos!');
    //     } else if (!validarEmail(correo)) {
    //         alert('Correo ya registrado!');
    //     } else {
    //         if (clienteSelected !== null) {
    //             clienteSelected.nombre = nombre;
    //             clienteSelected.apellido = apellido;
    //             clienteSelected.email = correo;
    //             clienteSelected.fondos = fondos;
    //             clienteSelected.mensualidad = mensualidad;
    //             clienteSelected = null;
    //         } else {
    //             const persona = new Persona(nombre, apellido, correo, fondos, mensualidad);
    //             clientesArray.push(persona);
    //             console.log(persona);
    //         }

    //         fetch('http://localhost:5500/agregarCliente', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 nombre,
    //                 apellido,
    //                 correo,
    //                 fondos,
    //                 mensualidad
    //             }),
    //         })
    //             .then(response => {
    //                 if (response.ok) {
    //                     // Cliente agregado exitosamente
    //                     alert('Cliente agregado a la base de datos');
    //                     // Resto del código...
    //                 } else {
    //                     alert('Error al agregar el cliente a la base de datos');
    //                 }
    //             })
    //             .catch(error => {
    //                 alert('Error al conectarse con el servidor');
    //             });

    //         actualizarTabla();
    //         limpiar()
    //     }
    // }


    function guardarInfo() {
        var nombre = nombreIn.value;
        var apellido = apellidoIn.value;
        var correo = correoIn.value;
        var fondos = Number(fondosIn.value);
        var mensualidad = Number(mensualidadIn.value);
      
        if (nombre === "" || apellido === "" || correo === "" || fondosIn.value === "" || mensualidadIn.value === "") {
          alert('Debe rellenar todos los campos.');
          return;
        }
      
        fetch('http://localhost:443/agregarCliente', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            apellido,
            correo,
            fondos,
            mensualidad
          }),
        })
        .then(response => {
          if (response.ok) {
            // Cliente agregado exitosamente
            alert('Cliente agregado a la base de datos');
            // Resto del código si es necesario
          } else {
            alert('Error al agregar el cliente a la base de datos');
          }
        })
        .catch(error => {
          alert('Error al conectarse con el servidor');
        });
      }
      

    function validarEmail(email) {
        if (clienteSelected !== null && clienteSelected.email === email) {
            return true;
        }

        for (let i = 0; i < clientesArray.length; i++) {
            const cliente = clientesArray[i];
            if (cliente.validarEmail(email)) {
                return false;
            }
        }

        return true;
    }

    function limpiar() {
        nombreIn.value = "";
        apellidoIn.value = "";
        correoIn.value = "";
        fondosIn.value = "";
        mensualidadIn.value = "";
    }

    guardarBtn.onclick = function () {
        guardarInfo();
    }

    cancelarBtn.onclick = function () {
        cancelarOperacion();
    }

    function cancelarOperacion() {
        nombreIn.value = "";
        apellidoIn.value = "";
        correoIn.value = "";
        fondosIn.value = "";
        mensualidadIn.value = "";
    }

    function actualizarTabla() {
        clientesTabla.innerHTML = '';
        var tableRow = tr(clientesTabla);
        var tableHeader = th(tableRow, { innerHTML: 'Nombre' })
        var tableHeader = th(tableRow, { innerHTML: 'Apellido' })
        var tableHeader = th(tableRow, { innerHTML: 'Email' })
        var tableHeader = th(tableRow, { innerHTML: 'Fondos disponibles' })
        var tableHeader = th(tableRow, { innerHTML: 'Mensualidad' })
        var tableHeader = th(tableRow, { innerHTML: 'Cobrar' })
        var tableHeader = th(tableRow, { innerHTML: 'Eliminar' })
        var tableHeader = th(tableRow, { innerHTML: 'Actualizar' })
        clientesArray.every((cliente, index) => {
            var tableRow = tr(clientesTabla);
            tableRow.indiceCliente = index;
            td(tableRow, { innerHTML: cliente.nombre });
            td(tableRow, { innerHTML: cliente.apellido });
            td(tableRow, { innerHTML: cliente.email });
            td(tableRow, { innerHTML: cliente.fondos });
            td(tableRow, { innerHTML: cliente.mensualidad });
            var mensualidadBtn = td(tableRow, { innerHTML: 'Cobrar', className: 'cobrarBtn', onclick: aplicarMensualidad });
            mensualidadBtn.cliente = cliente;
            var eliminarBtn = td(tableRow, { innerHTML: 'Eliminar', className: 'eliminarBtn', onclick: eliminarCliente });
            eliminarBtn.cliente = cliente;
            var actualizarBtn = td(tableRow, { innerHTML: 'Actualizar', className: 'actualizarBtn', onclick: actualizarInformacionDeCliente });
            actualizarBtn.cliente = cliente;

            if (!cliente.validarCantidadDeFondos()) {
                mensualidadBtn.classList.add('desactivarBoton');
                tableRow.classList.add('fondosInsuficientes');
            } else {
                mensualidadBtn.onclick = aplicarMensualidad;
            }
            return true;
        });
    }

    function actualizarInformacionDeCliente(event) {
        var actualizarBtn = event.target;
        clienteSelected = actualizarBtn.cliente;
        nombreIn.value = clienteSelected.nombre;
        apellidoIn.value = clienteSelected.apellido;
        correoIn.value = clienteSelected.email;
        fondosIn.value = clienteSelected.fondos;
        mensualidadIn.value = clienteSelected.mensualidad;
    }

    function aplicarMensualidad(event) {
        var mensualidadBtn = event.target;
        var cliente = mensualidadBtn.cliente;
        cliente.cobrarMensualidad();
        actualizarTabla();
    }

    function eliminarCliente(event) {
        var resultado = window.confirm('¿Estás seguro?');
        if (resultado === true) {
            var eliminarBtn = event.target;
            var cliente = eliminarBtn.cliente;
            var indice = clientesArray.indexOf(cliente);
            if (indice !== -1) {
                clientesArray.splice(indice, 1);
                alert('El cliente ' + cliente.nombre + ' ' + cliente.apellido + ' ha sido eliminado!');
                actualizarTabla();
            }
        } else {
            alert('No se ha tomado ninguna acción.');
        }
    }
}