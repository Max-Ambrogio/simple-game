class Player {
    constructor(name){
        this.name = name
    }

    randomGuess = (guesses) => {
        const index = Math.floor(Math.random() * guesses.length)
        console.log('random guess', index)
        return guesses[index]
    }
}