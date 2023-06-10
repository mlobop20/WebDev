import { Controller } from "../controller/controller.js";
import { CreditsService } from "./creditsService.js";
import { CreditsView } from "./creditsView.js";

export class CreditsController extends Controller{
    constructor(gameManager, parent){
        super(gameManager);
        this.service = new CreditsService();
        this.view = new CreditsView(parent);
    }
}