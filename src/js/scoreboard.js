class Scoreboard{
    constructor(element){
        this.scoreEl = element

        this.setup()
    }

    setup(){
        document.addEventListener('game-status', this.updateScore)
    }

    updateScore = (evt) => {
        this.scoreEl.textContent = evt.detail.message
    }

}