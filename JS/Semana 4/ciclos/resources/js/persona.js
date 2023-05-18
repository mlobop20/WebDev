export class Persona {
    constructor(pnombre={}, papellido={}, pemail={}, phobies=[]) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.email = pemail;
        this.hobies = phobies;
    }
    correr() {
        console.log(this.nombre + ' corre');
    }
}