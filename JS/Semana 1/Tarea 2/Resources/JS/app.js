window.onload = function () {
    var cantidadPersonas = document.getElementById('cantidadPersonas');
    var calcularBtn = document.getElementById('calcularBtn');

    var precioMetroTela = 3550;
    var metrosPorPersona = 3;
    var cantidadDeTela = 0;
    var precioTotal = 0;

    calcularBtn.onclick = function () {
        calculo()
    }


    function calculo() {
        cantidadDeTela = Number(cantidadPersonas.value) * metrosPorPersona;
        precioTotal = cantidadDeTela * precioMetroTela;
        resultado.innerHTML = `Se necesitarán: ${cantidadDeTela} metros de tela y el precio a pagar por dicha cantidad será de: ${precioTotal}`;
    }
}