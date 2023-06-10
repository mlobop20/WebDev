import { p } from "../libs/html.js";
import { View } from "../view/view.js";

export class ScoresView extends View{
    constructor(parent){
        super(parent);
        this.container.className = 'scores-controller';
        var title = p(this.container, {innerHTML:'SCORES'})
    }
}