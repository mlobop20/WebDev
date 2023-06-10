import { p } from "../libs/html.js";
import { View } from "../view/view.js";

export class CreditsView extends View{
    constructor(parent){
        super(parent);
        this.container.className = 'credits-controller';
        var title = p(this.container, {innerHTML:'CREDITS'})
    }
}