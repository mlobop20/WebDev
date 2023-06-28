import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MEDIUM } from "../libs/constants.js";
import { p, div } from "../libs/html.js";
import { View } from "../view/view.js";

export class DifficultyView extends View {
    constructor(parent, callback) {
        super(parent);
        this.callback = callback;
        this.container.className = 'difficulty-controller';
        var title = p(this.container, { className:'game_title',innerHTML: 'DIFFICULTY' });
        this.lowBtn = div(this.container, { innerHTML: 'LOW', className: 'game_button', onclick: this.onLowBtn.bind(this) });
        this.mediumBtn = div(this.container, { innerHTML: 'MEDIUM', className: 'game_button', onclick: this.onMediumBtn.bind(this) })
        this.highBtn = div(this.container, { innerHTML: 'HIGH', className: 'game_button', onclick: this.onHighBtn.bind(this) })
    }


    onLowBtn() {
            this.callback(DIFFICULTY_LOW);
    }
    onMediumBtn() {
        this.callback(DIFFICULTY_MEDIUM)
    }
    onHighBtn() {
        this.callback(DIFFICULTY_HIGH)

    }

}