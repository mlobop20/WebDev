import { p, div } from "../libs/html.js";
import { View } from "../view/view.js";
import { ScoreView } from "./scoreView.js";

export class ScoresView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'scores-controller';
        this.titleContainer = div( this.container, { className: 'scores-controller-tittleContainer' });
        this.scoresContainer = div( this.container, { className: 'scores-controller-scoresContainer' });

        var title = p( this.titleContainer, { className: 'game-title', innerHTML: 'SCORES' });
    }

    showScores(scores) {
        this.scoresContainer.innerHTML = '';
        scores.forEach(score => {
            var scoreView = new ScoreView(this.scoresContainer, score);
        });
    }
}


