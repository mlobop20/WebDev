window.onload = function () {

  var agregarArticuloBtn = document.getElementById('agregarArticuloBtn');
  var preciosContainer = document.getElementById('preciosContainer');
  var limpiarBtn = document.getElementById('limpiarBtn');
  var articulosSlt = document.getElementById('articulosSlt');



  var precios = [];

  var precioNeto = 0;
  var precioBruto = 0;
  const IMPUESTO = 13;

  function agregarArticulo(){
    var selectedIndex = articulosSlt.selectedIndex;
    var selectedArticuloOption = articulosSlt.children[selectedIndex];
    var optionText = selectedArticuloOption.text;
    
    var precio = Number(articulosSlt.value);
    precios.push(precio);

    var precioP = document.createElement('p');
    precioP.innerHTML = optionText;
    preciosContainer.appendChild(precioP);

    calculo();

  }
  agregarArticuloBtn.onclick = function(){
    agregarArticulo();
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