import { div } from '../libs/html.js'

export class View{
    constructor(parent){
        this.parent = parent;
        this.container = div(this.parent,{});

    }

    clean(){
        this.parent.removeChild(this.container);
    }
}