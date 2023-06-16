import { View } from "../view/view.js";
import { div, p } from "../libs/html.js";


export class CardView extends View {
    constructor(parent, card, callback) {
        super(parent);
        this.container.className = 'cardView';
        this.container.onclick = this.onClick.bind(this);
        this.card = card;
        this.callback = callback;
        this.icon = p(this.container, {});
        this.showHidden();
    }


    onClick() {
        this.callback(this);
    }

    showHidden() {
        this.icon.innerHTML = '';
        this.container.classList.add('cardView_hidden');
        this.container.classList.remove('cardView_showing');
        this.container.classList.remove('cardView_discovered');
    }
    showShowing() {
        this.icon.innerHTML = this.card.icon;
        this.container.classList.add('cardView_showing');
        this.container.classList.remove('cardView_discovered');
        this.container.classList.remove('cardView_hidden');


    }

    showDiscovered() {
        this.container.classList.add('cardView_discovered');
        this.container.classList.remove('cardView_showing');
        this.container.classList.remove('cardView_hidden');


    }



}