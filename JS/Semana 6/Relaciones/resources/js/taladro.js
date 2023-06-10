export class Taladro {

    constructor(nombre, bateria = null) {
        this.nombre = nombre;
        this.bateria = bateria;
    }

    taladrar() {
        if (this.bateria === null) {

            console.log(this.nombre, 'No tengo bateria!')
        } else {
            this.bateria.usar();
            console.log(this.bateria.nivel)
        }
    }
}