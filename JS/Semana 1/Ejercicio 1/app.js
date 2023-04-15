window.onload = function(){
    var precioIn = document.getElementById('precioIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoH = document.getElementById('resultadoH');

    var precioNeto = 0;
    var precioBruto = 0;
    const IMPUESTO = 13;

    calcularBtn.onclick = function(){
        precioBruto= Number(precioIn.value);
        var impuestoACobrar = precioBruto *(IMPUESTO / 100);
        precioNeto = precioBruto + impuestoACobrar;
        resultadoH.innerHTML =`El precio final es: ${precioNeto}`;
      }

}