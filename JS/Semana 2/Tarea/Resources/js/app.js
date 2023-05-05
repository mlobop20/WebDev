window.onload = function () {

  var agregarEstudianteBtn = document.getElementById('agregarEstudianteBtn');
  var mostrarInfoBtn = document.getElementById('mostrarInfoBtn');
  var mostrarInfoH = document.getElementById('mostrarInfoH');

  var inputNombre = document.getElementById('inputNombre');
  var inputApellido = document.getElementById('inputApellido');
  var inputNota = document.getElementById('inputNota');
  var inputEmail = document.getElementById('inputEmail');

  var estudiantesSlt = document.getElementById('estudiantesSlt');

  var nombresEstudiantes = [];
  var apellidosEstudiantes = [];
  var notasEstudiantes = [];
  var emailEstudiantes = [];

  mostrarInfoBtn.onclick = function () {
    mostrarInfo();
  }

 agregarEstudianteBtn.onclick = function () {
     agregarEstudiante();
   }

  function agregarEstudiante() {
    var agregaNombreAArray = inputNombre.value;
    var agregaApellidoAArray = inputApellido.value;
    var agregaNotaAArray = inputNota.value;
    var agregaEmailAArray = inputEmail.value;

    nombresEstudiantes.push(agregaNombreAArray);
    apellidosEstudiantes.push(agregaApellidoAArray);
    notasEstudiantes.push(agregaNotaAArray);
    emailEstudiantes.push(agregaEmailAArray);

    llenarEstudiantesSlc();
  }


  function llenarEstudiantesSlc() {
    estudiantesSlt.innerHTML = '';

    nombresEstudiantes.forEach(function (infoEstudiante, index) {
      var infoEstudianteOption = document.createElement('option');

      infoEstudianteOption.innerHTML = `${nombresEstudiantes[index]} ${apellidosEstudiantes[index]}`;

      infoEstudianteOption.value = index;
      estudiantesSlt.appendChild(infoEstudianteOption);
    });
  }


function mostrarInfo(){
  limpiar();
  var selectedIndex = estudiantesSlt.selectedIndex;

  var mostrarH = document.createElement('h3');
  mostrarH.innerHTML = `Nombre completo: ${nombresEstudiantes[selectedIndex]} ${apellidosEstudiantes[selectedIndex]} \n Nota: ${notasEstudiantes[selectedIndex]} `;
  
  mostrarInfoH.appendChild(mostrarH);
  
}


function limpiar(){
  mostrarInfoH.innerHTML='';

}


}