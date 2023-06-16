
window.addEventListener('load', main)
function main() {
    // Modelo: Contiene la lógica de los datos
    class TareaModelo {
        constructor() {
            this.tareas = [];
        }

        agregarTarea(tarea) {
            this.tareas.push(tarea);
        }

        eliminarTarea(indice) {
            this.tareas.splice(indice, 1);
        }

        obtenerTareas() {
            return this.tareas;
        }
    }

    // Vista: Se encarga de la presentación y la interacción con el usuario
    class TareaVista {
        constructor() {
            this.listaTareas = document.getElementById('lista-tareas');
            this.formulario = document.getElementById('formulario');
            this.inputTarea = document.getElementById('input-tarea');
            this.btnAgregar = document.getElementById('btn-agregar');
        }

        mostrarTareas(tareas) {
            this.listaTareas.innerHTML = '';

            tareas.forEach((tarea, indice) => {
                const elementoTarea = document.createElement('li');
                elementoTarea.classList.add('list-unstyled');

                elementoTarea.textContent = tarea; 

                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.classList.add('btn');
                botonEliminar.classList.add('ms-5');
                botonEliminar.classList.add('m-1');
                botonEliminar.classList.add('btn-danger');

                botonEliminar.addEventListener('click', () => {
                    this.controlador.eliminarTarea(indice);
                });

                elementoTarea.appendChild(botonEliminar);
                this.listaTareas.appendChild(elementoTarea);
            });
        }

        obtenerTarea() {
            return this.inputTarea.value;
        }

        limpiarInput() {
            this.inputTarea.value = '';
        }

        manejarSubmit(evento) {
            evento.preventDefault();
            const tarea = this.obtenerTarea();
            this.controlador.agregarTarea(tarea);
            this.limpiarInput();
        }

        inicializar() {
            this.formulario.addEventListener('submit', this.manejarSubmit.bind(this));
        }
    }

    // Controlador: Coordina las acciones entre el modelo y la vista
    class TareaControlador {
        constructor(modelo, vista) {
            this.modelo = modelo;
            this.vista = vista;
            this.vista.controlador = this;
        }

        agregarTarea(tarea) {
            this.modelo.agregarTarea(tarea);
            this.actualizarVista();
        }

        eliminarTarea(indice) {
            this.modelo.eliminarTarea(indice);
            this.actualizarVista();
        }

        actualizarVista() {
            const tareas = this.modelo.obtenerTareas();
            this.vista.mostrarTareas(tareas);
        }

        inicializar() {
            this.actualizarVista();
            this.vista.inicializar();
        }
    }

    // Crear instancia del modelo, la vista y el controlador
    const modelo = new TareaModelo();
    const vista = new TareaVista();
    const controlador = new TareaControlador(modelo, vista);

    // Inicializar la aplicación
    controlador.inicializar();

}