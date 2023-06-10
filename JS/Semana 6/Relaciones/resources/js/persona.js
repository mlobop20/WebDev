export class Persona {
    constructor(cedula) {
        this.cedula = cedula;
    }

    trabajar(taladro) {
        taladro.taladrar();
    } 
    decirNombre() {
        console.log('Mi nombre es: ', this.cedula.nombre)
    }
}