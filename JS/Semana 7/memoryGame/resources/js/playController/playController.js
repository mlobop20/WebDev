import { Controller } from "../controller/controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";
import { Card } from "./card.js";

export class PlayController extends Controller{
    constructor(gameManager, parent){
        super(gameManager);
        this.view = new PlayView(parent);
        this.service = new PlayService(this.gameManger.difficulty, this.showCards.bind(this));
        this.cards = []; //model
    }

    showCards(cards){
        this.view.showCards(cards);
        console.log(cards);

    }
}