window.onload = function () {


    var nombreInput = document.getElementById('nombreInput');
    var apellidosInput = document.getElementById('apellidosInput');
    var notaInput = document.getElementById('notaInput');
    var emailInput = document.getElementById('emailInput');
    var ingresarBtn = document.getElementById('ingresarBtn');
    var limpiarBtn = document.getElementById('limpiarBtn');
    var estudiantesSelect = document.getElementById('estudiantesSelect');
    var mostrarDatosEstudiantesLista = document.getElementById('mostrarDatosEstudiantesLista');


    estudiantesSelect.style.display = "none";

    limpiarBtn.onclick = function () {
        limpiar();
    }

    ingresarBtn.onclick = function () {
        agregarEstudiante();
    }

    function agregarEstudiante() {

        var datosEstudiantes = [];

        var nombre = nombreInput.value;
        var apellidos = apellidosInput.value;
        var nota = Number(notaInput.value);
        var email = emailInput.value;

        datosEstudiantes.push(nombre, apellidos, nota, email);

        var nombreApellidoSelect = document.createElement('option');
        nombreApellidoSelect.innerHTML = nombre + ' ' + apellidos;
        estudiantesSelect.appendChild(nombreApellidoSelect);

        estudiantesSelect.style.display = "inline";

        //esta linea es para cuando se aprete el boton se borren los datos
        nombreInput.value = '';
        apellidosInput.value = '';
        notaInput.value = '';
        emailInput.value = '';

        //aqui va la funcion para cuando cambie el select cambie los datos
        estudiantesSelect.addEventListener('change', function () {
            mostrarDatosEstudiantesLista.innerHTML = '';
            var opcionSeleccionada = estudiantesSelect.value;
            var nuevaLista = document.createElement('li');
            nuevaLista.innerHTML = `<b>Nombre</b>: ${opcionSeleccionada}</br>
                               <b>Nota:</b> ${nota}</br>
                               <b>Email:</b> ${email}`;
            mostrarDatosEstudiantesLista.appendChild(nuevaLista);

        });
    }


    function limpiar() {
        nombreInput.value = '';
        apellidosInput.value = '';
        notaInput.value = '';
        emailInput.value = '';
        mostrarDatosEstudiantesLista.innerHTML = '';
        estudiantesSelect.innerHTML = '';
        estudiantesSelect.style.display = "none";

        console.log('fue eliminado el select');

    }
}

