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
       const btns = this.gameBoardEl.querySelectorAll(".move button")
       btns.forEach((btn) => {
           btn.addEventListener("click" , this.handleMove)
        })

        this.player1 = new Player("me")
        this.player2 = new Player("computer")

        const resultsEl = this.gameBoardEl.querySelector('#round-result')
        new StatusMessage(resultsEl)

        // const scoreboardEl = this.scoreBoardEl.querySelector('scoreboard')
        // new StatusMessage(resultsEl)

    }

    handleMove = (evt) => {
        const btn = evt.target 
        const move = btn.dataset.move
        console.log("player1 guess:", move)

        const player1move = move;
        const player2move = this.player2.randomGuess(this.MOVES)

        const player1score = 0
        const player2score = 0

        this.latestOutcome = this.pickWinner(player1move, player2move)
        this.updateGamestatus()

        this.updateScore = this.addPoints(player1score, player2score)
    }
    
    pickWinner = (p1m, p2m) => {

        const player1Guess = this.gameBoardEl.querySelector('.player-one')
        const player2Guess = this.gameBoardEl.querySelector('.player-two')
        player1Guess.innerText = "player one chose: " + p1m
        player2Guess.innerText = "player two chose: " + p2m

        console.log('player guess:', p1m, p2m)
        let outcome = ''

        if (p1m == p2m){ //tie
            outcome = 'tie'
        } else {
            if (p1m == 'rock') {
                if (p2m =='paper') {
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

    addPoints = (p1s,p2s) => { 
        //select player 1 score 
        //select player 2 score
        //check who won the round
        //if player 1 wins, add point for player 1 win update player 1 score 
        //if player 2 wins, add point for player 2 win update player 2 score 
        //tie = no points 
        //when the game reaches 5 points = game over 
        //game over = resets game
        const p1s = this.scoreBoardEl.querySelector('#player1 .score')
        console.log(p1s.value)
        const p2s = this.scoreBoardEl.querySelector('#player2 .score')
        console.log(p2s.value)

        const roundWin = this.OUTCOMES[this.latestOutcome]
        console.log(roundWin)

        //player 1 win
        if(roundWin == "Player 1 won"){
            p1s.textContent++
        } else if (p1s.value == 5) {
            console.log('GAME OVER PLAYER 1 WINS')
        }

        if(roundWin == "Player 2 won"){
            p2s.textContent++
        } else if (p2s.value == 5) {
            console.log('GAME OVER PLAYER 2 WINS')
        }
        // if (roundWin == "tie") {
        //     //do nothing
        // } else {
        //     if (roundWin == "Player 1 won") {
        //         p1s.textContent++
        //     } else if (roundWin == "Player 2 won") {
        //         p2s.textContent++
        //     }
        // }
   
        
        
        // return;
          
    }

    gameOver = (p1s,p2s) => {
        const p1s = this.scoreBoardEl.querySelector('#player1 .score')
        console.log(p1s)
        const p2s = this.scoreBoardEl.querySelector('#player2 .score')
        console.log(p2s)
    }



    updateGamestatus = () => {
        // const score = 
        const message = this.OUTCOMES[this.latestOutcome]
        const evt = new CustomEvent('game-status', {detail: { message: message }})
        document.dispatchEvent(evt)      
    }
}