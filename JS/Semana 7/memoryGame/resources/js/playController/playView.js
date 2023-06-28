import { div, p } from "../libs/html.js";
import { View } from "../view/view.js";
import { CardView } from "./cardView.js";

export class PlayView extends View {
    constructor(parent, cardClickCallback, resetCallback) {
        super(parent);
        this.resetCallback = resetCallback;
        this.cardClickCallback = cardClickCallback;
        this.container.className = 'play-controller';
        this.titleContainer = div(this.container, { className: 'play-controller-titleContainer' });
        this.hudContainer = div(this.container, { className: 'play-controller-hudContainer' });
        this.cardsContainer = div(this.container, { className: 'play-controller-cardsContainer' });


        var title = p(this.titleContainer, { className:'game_title',innerHTML: 'Cards Memory Game', });
        this.hudText = p(this.hudContainer, {});
        var resetBtn = div(this.hudContainer, { innerHTML: 'Reset', className: 'play-controller-resetBtn', onclick: this.onResetBtn.bind(this) });
    }


    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        cards.forEach(card => {
            var cardView = new CardView(this.cardsContainer, card, this.cardClickCallback)

        });

    }

    onResetBtn() {
        this.resetCallback();
    }

    updateHudText(clicks, time) {
        this.hudText.innerHTML = `Clicks: ${clicks} Time:${time}`;
    }

}