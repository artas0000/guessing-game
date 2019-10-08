class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.center = Math.ceil((this.max + this.min) / 2);
        return this.center
    }

    lower() {
        this.max = this.center;
    }

    greater() {
        this.min = this.center;
    }
}

module.exports = GuessingGame;
