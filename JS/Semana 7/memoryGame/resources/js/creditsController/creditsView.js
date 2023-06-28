import { p } from "../libs/html.js";
import { View } from "../view/view.js";

export class CreditsView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'credits-controller';
        var title = p(this.container, { className: 'game_title', innerHTML: 'CREDITS' })
        p(this.container, { className: 'game_title', innerHTML: 'Creado por Maikol Lobo Porras' })
        p(this.container, { className: 'game_title', innerHTML: 'Curso: Desarrollo web con JS' })
    }
}