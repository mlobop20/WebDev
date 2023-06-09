import { Controller } from "../controller/controller.js";
import { DifficultyService } from "./difficultyService.js";
import { DifficultyView } from "./difficultyView.js";
import { Difficulty } from "./difficulty.js";

export class DifficultyController extends Controller{
    constructor(gameManager, parent){
        super(gameManager);
        this.view = new DifficultyView(parent, this.difficultSelected.bind(this));
        this.service = new DifficultyService();
    }
    
    difficultSelected(difficulty){
        this.gameManager.setDifficuly(difficulty);
    }
}