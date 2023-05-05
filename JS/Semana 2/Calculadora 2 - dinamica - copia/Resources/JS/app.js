window.onload = function () {

  var agregarArticuloBtn = document.getElementById('agregarArticuloBtn');
  var preciosContainer = document.getElementById('preciosContainer');
  var limpiarBtn = document.getElementById('limpiarBtn');
  var articulosSlt = document.getElementById('articulosSlt');
  var preciosDeArticulos = [];
  var nombresDeArticulos = [];
  var preciosDeArticulosSeleccionados = [];
  var precioNeto = 0;
  var precioBruto = 0;
  const IMPUESTO = 13;


  preciosDeArticulos.push(1250.25, 1000.50, 900.75, 1900.30);
  nombresDeArticulos.push('Coca Cola', 'Arroz', 'Leche', 'Huevos');

  function llenarArticulosSelect() {
    articulosSlt.innerHTML = '';
      nombresDeArticulos.forEach(function (nombreDeArticulo, index) {
      var articuloOpcion = document.createElement('option');
      articuloOpcion.innerHTML = `${nombresDeArticulos[index]} ₡${preciosDeArticulos[index]} `;
      articuloOpcion.value = index;
      articulosSlt.appendChild(articuloOpcion);
    });
  }
  llenarArticulosSelect();

  // preciosDeArticulos.forEach(function (precioDeArticulo){
  //   console.log(precioDeArticulo);
  // });


  agregarArticuloBtn.onclick = function () {
    agregarArticulo();
  }
  limpiarBtn.onclick = function () {
    limpiar();
  }



  function agregarArticulo() {
    var indiceDelArticulo = Number(articulosSlt.value);
    var precio = preciosDeArticulos[indiceDelArticulo];

    preciosDeArticulosSeleccionados.push(precio);

    var precioP = document.createElement('p');
    precioP.innerHTML = `${nombresDeArticulos[indiceDelArticulo]} ₡${preciosDeArticulos[indiceDelArticulo]} `;
    preciosContainer.appendChild(precioP);

    calculo();

  }




  function porCadaPrecioDeArticuloSeleccionado(precio) {
    precioBruto = precioBruto + precio;

  }

  function calculo() {

    preciosDeArticulosSeleccionados.forEach(porCadaPrecioDeArticuloSeleccionado);


    var impuestoACobrar = precioBruto * (IMPUESTO / 100);
    precioNeto = precioBruto + impuestoACobrar;
    resultadoH.innerHTML = `Total: ${precioNeto.toFixed(2)}`;
    precioBruto = 0;
  }

  function limpiar() {
    precioBruto = 0;
    preciosContainer.innerHTML = '';
    preciosDeArticulosSeleccionados = [];
    resultadoH.innerHTML = '';
  }
}