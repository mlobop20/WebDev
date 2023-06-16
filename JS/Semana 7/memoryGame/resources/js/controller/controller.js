export class Controller{
    constructor(gameManger){
        this.gameManager = gameManger;
        this.view = null;
        this.service = null;
    }
    clean(){
        this.view.clean();
    }
}