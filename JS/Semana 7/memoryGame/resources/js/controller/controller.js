export class Controller{
    constructor(gameManger){
        this.gameManger = gameManger;
        this.view = null;
        this.service = null;
    }
    clean(){
        this.view.clean();
    }
}