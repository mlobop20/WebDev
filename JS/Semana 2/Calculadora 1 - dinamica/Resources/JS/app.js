window.onload = function () {

  var precioInput = document.getElementById('precioInput');
  var agregarPrecioBtn = document.getElementById('agregarPrecioBtn');
  var preciosContainer = document.getElementById('preciosContainer');
  var limpiarBtn = document.getElementById('limpiarBtn');


  var precios = [];

  var precioNeto = 0;
  var precioBruto = 0;
  const IMPUESTO = 13;

  function agregarPrecio(){
    var precio = Number(precioInput.value);
    precios.push(precio);
    precioInput.value= '';

    var precioP = document.createElement('p');
    precioP.innerHTML = precio;
    preciosContainer.appendChild(precioP);

    calculo();

  }
  agregarPrecioBtn.onclick = function(){
    agregarPrecio();
  }


function porCadaPrecio(precio){
  precioBruto= precioBruto + precio;
  
}

  function calculo() {
    
    precios.forEach(porCadaPrecio);

    
    var impuestoACobrar = precioBruto * (IMPUESTO / 100);
    precioNeto = precioBruto + impuestoACobrar;
    resultadoH.innerHTML = `Total: ${precioNeto.toFixed(2)}`;
    precioBruto = 0;
  }




  limpiarBtn.onclick = function () {
    limpiar();
  }

  function limpiar(){
    precioBruto = 0;
      preciosContainer.innerHTML='';
      precios=[];
      resultadoH.innerHTML='';
  }
}