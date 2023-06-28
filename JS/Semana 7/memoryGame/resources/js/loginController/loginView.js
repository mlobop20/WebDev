import { input, p, div } from "../libs/html.js";
import { View } from "../view/view.js";

export class LoginView extends View {
    constructor(parent, callback) {
        super(parent);
        this.callback = callback;
        this.container.className = 'login-controller';
        var title = p(this.container, {className:'game_title', innerHTML: 'Login' })
        var subTitle = p(this.container, { innerHTML: 'Enter Username to play' });
        this.userNameIn = input(this.container, { className: 'game_input', placeholder: 'Username' });
        var okBtn = div(this.container, { className: 'game_button', innerHTML: 'OK', onclick: this.onOkBtn.bind(this) });
    }
    onOkBtn() {
        var username = this.userNameIn.value;
        if (username !== '') {
            this.callback(username);
        }
    }
}