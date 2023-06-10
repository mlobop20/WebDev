

window.addEventListener('load', main)
function main() {

function calcularPromedio(arreglo) {
  var suma = 0;
  var cantidadElementos = arreglo.length;

  for (var i = 0; i < cantidadElementos; i++) {
    suma += arreglo[i];
  }

  var promedio = suma / cantidadElementos;

  console.log("El promedio del clima es: " + promedio);
}

var temperatura = [30,21,25,26,24,18,9];
calcularPromedio(temperatura);
}