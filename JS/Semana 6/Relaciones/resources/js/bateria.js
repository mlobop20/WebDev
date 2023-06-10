export class Bateria {

    constructor(nivel = 100) {
        this.nivel = nivel;
    }
    cargar() {
        this.nivel = 100;
    }

    usar() {
        if (this.nivel >= 0) {
            this.nivel -= 5

        } else {
            console.log('Bateria sin energia!')
        }
    }
}