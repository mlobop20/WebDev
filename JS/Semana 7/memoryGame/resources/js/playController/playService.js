export class PlayService {
    constructor(difficulty, callback) {
        this.callback = callback;
        this.difficulty = difficulty
        this.getData();

    }
    getData() {
        var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/${this.difficulty}/type/food`  ;
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.readyState === 4 && request.status === 200) {
                var responseText = request.responseText;
                var data = JSON.parse(responseText);
                this.callback(data.cards);
            }
        }
        request.send();
    }

    sendScore(clicks, time, username){
        var url = 'https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores';
        var score = {"clicks":clicks,"score":(clicks+time),"time":time,"username":username}
        var request = new XMLHttpRequest();
        request.open('SEND', this.url);
        request.send(JSON.stringify(score));
    }
}