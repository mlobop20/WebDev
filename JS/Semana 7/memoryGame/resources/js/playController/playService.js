export class PlayService {
    constructor(difficulty, callback) {
        this.callback = callback;
        this.url = 'https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/8/type/food' + difficulty;
        this.getData();

    }
    getData() {
        var request = new XMLHttpRequest();
        request.open('GET', this.url);
        request.onload = () => {
            if (request.readyState === 4 && request.status === 200) {
                var responseText = request.responseText;
                var data = JSON.parse(responseText);
                this.callback(data.cards);
            }
        }
        request.send();
    }
}