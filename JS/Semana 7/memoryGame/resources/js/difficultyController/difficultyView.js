import { p } from "../libs/html.js";
import { View } from "../view/view.js";

export class DifficultyView extends View{
    constructor(parent){
        super(parent);
        this.container.className = 'difficulty-controller';
        var title = p(this.container, {innerHTML:'DIFFICULTY'})
    }
}