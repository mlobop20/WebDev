import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE } from "../libs/constants.js";
import { div, p } from "../libs/html.js";
import { View } from "../view/view.js";

export class MenuView extends View {
    constructor(parent, callback) {
        super(parent);
        this.callback = callback;
        this.container.className = 'menu-controller';
        var title = p(this.container, { className: 'game_title', innerHTML: 'MENU' });

        this.loginBtn = div(this.container, { innerHTML: 'LOGIN', className: 'game_button', onclick: this.onLoginBtn.bind(this) });
        this.playBtn = div(this.container, { innerHTML: 'PLAY', className: 'game_button', onclick: this.onPlayBtn.bind(this) })
        this.scoresBtn = div(this.container, { innerHTML: 'SCORES', className: 'game_button', onclick: this.onScoresBtn.bind(this) })
        this.difficultyBtn = div(this.container, { innerHTML: 'DIFFICULTY', className: 'game_button', onclick: this.onDifficultyBtn.bind(this) })
        this.creditsBtn = div(this.container, { innerHTML: 'CREDITS', className: 'game_button', onclick: this.onCreditsBtn.bind(this) })
    }
    onLoginBtn() {
        this.callback(LOGIN_STATE);
    }


    onPlayBtn() {
        this.callback(PLAY_STATE);
    }

    onScoresBtn() {
        this.callback(SCORES_STATE);
    }

    onDifficultyBtn() {
        this.callback(DIFFICULTY_STATE);
    }

    onCreditsBtn() {
        this.callback(CREDITS_STATE);
    }
}