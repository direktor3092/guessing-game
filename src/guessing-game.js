class GuessingGame {
    constructor() {
    }


    setRange(min, max) {
        this.left = min
        this.right = max
        return this.left, this.right
    }

    guess() {
    this.mid = this.left+(Math.ceil((this.right - this.left) / 2))
    return this.mid
    }

    lower() {
       this.right = this.mid
       return this.mid
    }

    greater() {
        this.left = this.mid
        return this.mid
    }
}

module.exports = GuessingGame;
