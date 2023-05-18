window.addEventListener('load', main)
function main() {

    var nombreIn = findElement('nombreIn');
    var apellidoIn = findElement('apellidoIn');
    var precioIn = findElement('precioIn');
    var nochesIn = findElement('nochesIn');
    var historialBtn = findElement('historialBtn');
    var historialUl = findElement('historialUl');

    var calcularBtn = findElement('calcularBtn');
    var descuentoSlt = findElement('descuentoSlt');
    var tipoClienteSlt = findElement('tipoClienteSlt');
    var estudiantesSlt = findElement('estudiantesSlt');
    var historialP = findElement('historialP');
    var descuento1 = findElement('descuento1');
    var descuento2 = findElement('descuento2');
    var descuento3 = findElement('descuento3');
    var descuento4 = findElement('descuento4');
    var historial = [];



    const DESCUENTO_1 = 0;
    const DESCUENTO_2 = 5;
    const DESCUENTO_3 = 10;
    const DESCUENTO_4 = 25;

    const DESCUENTO_NORMAL = 0;
    const DESCUENTO_VIP = 5;
    const DESCUENTO_PREMUIM = 10;
    const NORMAL = 'NORMAL';
    const VIP = 'VIP';
    const PREMIUM = 'PREMIUM';

    descuento1.innerHTML = `${DESCUENTO_1}%`;
    descuento2.innerHTML = `${DESCUENTO_2}%`;
    descuento3.innerHTML = `${DESCUENTO_3}%`;
    descuento4.innerHTML = `${DESCUENTO_4}%`;


    function findElement(id) {
        return document.getElementById(id);
    }


    calcularBtn.onclick = function () {
        calcularPrecio();
    }
    historialBtn.onclick = function () {
        mostrarHistorial();
    }

    function mostrarHistorial() {
        historialUl.innerHTML='';

        for (let index = 0; index < historial.length; index++) {
            const crearLi = document.createElement("li")
            crearLi.innerHTML = `${historial[index].nombre} ${historial[index].apellido} ${historial[index].cantidadNoches} `;
            historialUl.appendChild(crearLi);
        }
    }

    function calcularPrecio() {

        var tipoClienteSeleccionado = tipoClienteSlt.value;
        var descuentoSeleccionado = Number(descuentoSlt.value);
        var descuentoExtra = 0;
        var descuento = 0;
        var totalNeto = 0;
        var totalAPagar = 0;
        var descuentoAplicado = 0;

        if (descuentoSeleccionado === 1) {
            descuento = DESCUENTO_1;
        } else if (descuentoSeleccionado === 2) {
            descuento = DESCUENTO_2;
        } else if (descuentoSeleccionado === 3) {
            descuento = DESCUENTO_3;
        } else if (descuentoSeleccionado === 4) {
            descuento = DESCUENTO_4;
        }

        switch (tipoClienteSeleccionado) {
            case NORMAL:
                descuentoExtra = DESCUENTO_NORMAL;

                break;
            case VIP:
                descuentoExtra = DESCUENTO_VIP;

                break;
            case PREMIUM:
                descuentoExtra = DESCUENTO_PREMUIM;

                break;

            default:
                break;
        }

        totalAPagar = (Number(nochesIn.value) * Number(precioIn.value));
        descuentoAplicado = (totalAPagar * descuento / 100) + (totalAPagar * descuentoExtra / 100);
        totalNeto = totalAPagar - descuentoAplicado;
        historialP.innerHTML = (`Total: ${totalAPagar} <br> 
        Descuento: ${(descuentoAplicado)} <br> Total a pagar: ${totalNeto}`);

        historial.push({
            nombre: nombreIn.value,
            apellido: apellidoIn.value,
            cantidadNoches: Number(nochesIn.value),
            pagoTotal: totalNeto
        });

        console.log(historial);
    }



}