import { Carpintero } from "./Carpintero.js"
import { Mecanico } from "./Mecanico.js";
import { Taladro } from "./Taladro.js";
import { Bateria } from "./bateria.js";
import { Cedula } from "./cedula.js";

window.addEventListener('load', main)
function main() {

    var bateria = new Bateria();
    var makita = new Taladro('Makita', bateria);
    var dewalt = new Taladro('Dewalt', bateria);
    var esteban = new Carpintero(new Cedula('Esteban', 111111111111111));
    var juan = new Mecanico(new Cedula('Juan', 22222222222222222222));

    esteban.trabajar(makita);
    juan.trabajar(makita);
    juan.trabajar(dewalt);
    esteban.decirNombre();
    juan.decirNombre();
    console.log(makita)
    console.log(bateria)

    console.dir(juan)
    console.dir(esteban)
}