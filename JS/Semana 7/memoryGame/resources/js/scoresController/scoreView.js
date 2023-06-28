import { p } from "../libs/html.js";
import { View } from "../view/view.js";

export class ScoreView extends View {
    constructor(parent, score) {
        super(parent);
        this.score = score;
        this.container.className = 'scoreView';
        p(this.container, { innerHTML: this.score.username, className: 'scoreView-title' })  
        p( this.container, { innerHTML: `Time: ${this.score.time}`, className: 'scoreView-text' })
        p(this.container, { innerHTML: `Clicks: ${this.score.clicks}`, className: 'scoreView-text' })
        p(this.container, { innerHTML: `Score: ${this.score.score}`, className: 'scoreView-text' })
  
    }
}