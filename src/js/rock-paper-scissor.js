class RockPaperScissors extends Game {

    MOVES = ['rock', 'paper' , "scissors"]
    OUTCOMES = {
        tie: 'tied', 
        p1: 'Player 1 won',
        p2: 'Player 2 won',
    }
    constructor(selector){
        super(selector)

        this.setup()
    }
    
    setup(){
       const btns = this.gameBoradEl.querySelectorAll(".move button")
       btns.forEach((btn) => {
           btn.addEventListener("click" , this.handleMove)
        })

        this.player1 = new Player("me")
        this.player2 = new Player("computer")

        const resultsEl = this.gameBoradEl.querySelector('#round-result')
        new StatusMessage(resultsEl)

        const scoreboardEl = this.gameBoradEl.querySelector('#round-result')
        new StatusMessage(resultsEl)
    }

    handleMove = (evt) => {
        const btn = evt.target 
        const move = btn.dataset.move
        console.log("player1 guess:", move)

        const player1move = move;
        const player2move = this.player2.randomGuess(this.MOVES)

        this.latestOutcome = this.pickWinner(player1move, player2move)
        this.updateGamestatus()
    }

    pickWinner = (p1m, p2m) => {
        console.log('player guess:', p1m, p2m)
        let outcome = ''

        if (p1m == p2m){ //tie
            outcome = 'tie'
        } else {
            if (p1m == 'rock'){
                if (p2m =='paper'){
                    outcome = 'p2'
                } else {
                    outcome = 'p1'
                }
            } else if (p1m == 'paper') {
                if (p2m == 'rock'){
                    outcome = 'p1'
                } else {
                    outcome = 'p2'
                }
            } else if (p1m == "scissors") {
                if (p2m =='rock'){
                    outcome = 'p2'
                } else {
                    outcome = 'p1'
                }
            }
        }

        return outcome
    }
    updateGamestatus = () => {
        const message = this.OUTCOMES(this.latestOutcome)
        const evt = new CustomEvent('game-status', {detail: {message: }})
        document.dispatchEvent(evt)
    }
}