window.onload = function(){
    var cantidadCoca = document.getElementById('cantidadCoca');
    var cantidadPapas = document.getElementById('cantidadPapas');
    var cantidadHielo = document.getElementById('cantidadHielo');
    var calcularBtn = document.getElementById('calcularBtn');




var precioNeto = 0;
var precioBruto = 0;
const IMPUESTO = 13;
var precioCoca = 1250.25;
var precioPapas = 1850.50;
var precioHielo = 1250.50;

function calculo(){
  precioBruto = ((precioCoca * Number(cantidadCoca.value))+
  (precioPapas * Number(cantidadPapas.value))+
  (precioHielo * Number(cantidadHielo.value)));
  var impuestoACobrar = precioBruto * (IMPUESTO / 100);
  precioNeto = precioBruto + impuestoACobrar;
  resultadoNeto.innerHTML =`Precio Neto: ${precioBruto.toFixed(2)}`;
  resultadoImpuestos.innerHTML =`Impuestos: ${impuestoACobrar.toFixed(2)}`;
  resultadoH.innerHTML =`El precio final es: ${precioNeto.toFixed(2)}`;
}


calcularBtn.onclick = function(){
  calculo();
  }
}