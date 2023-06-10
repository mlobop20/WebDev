import { PlayController } from "./playController/playController.js"
import { CreditsController } from "./creditsController/creditsController.js";
import { DifficultyController } from "./difficultyController/difficultyController.js";
import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, MENU_STATE } from "./libs/constants.js";
import { LoginController } from "./loginController/loginController.js";
import { MenuController } from "./menuController/menuController.js";
import { ScoresController } from "./scoresController/scoresController.js";

export class GameManager {
    constructor() {
        this.difficulty = 8;
        this.currentController = null;
        this.backButton = document.getElementById('backButton');
        this.contentContainer = document.getElementById('contentContainer');
        this.changeTo(MENU_STATE);

        this.backButton.onclick = this.onBackButton.bind(this);

    }
    changeTo(state) {
        if (this.currentController !== null) {
            this.currentController.clean();
        }
        this.backButton.classList.remove('hidden');

        this.currentController = null;
        switch (state) {
            case MENU_STATE:
                this.backButton.classList.add('hidden');

                this.currentController = new MenuController(this, this.contentContainer);
                break;
            case LOGIN_STATE:
                this.currentController = new LoginController(this, this.contentContainer);
                break;
            case PLAY_STATE:
                this.currentController = new PlayController(this, this.contentContainer);

                break;
            case SCORES_STATE:
                this.currentController = new ScoresController(this, this.contentContainer);

                break;
            case DIFFICULTY_STATE:
                this.currentController = new DifficultyController(this, this.contentContainer);

                break;
            case CREDITS_STATE:
                this.currentController = new CreditsController(this, this.contentContainer);

                break;


            default:
                break;
        }
    }

    onBackButton(){
        this.changeTo(MENU_STATE);
        this.backButton.classList.add('hidden');
    }
}