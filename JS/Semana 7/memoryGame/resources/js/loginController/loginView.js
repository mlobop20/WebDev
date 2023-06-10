import { p } from "../libs/html.js";
import { View } from "../view/view.js";

export class LoginView extends View{
    constructor(parent){
        super(parent);
        this.container.className = 'login-controller';
        var title = p(this.container, {innerHTML:'LOGIN'})
    }
}