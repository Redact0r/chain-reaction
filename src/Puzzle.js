import wordBank from "./wordbank"

class Puzzle {
    generatePuzzlePhrase = () => {
        const maxLimit = wordBank.length
        const randomNum = Math.random() * maxLimit;
        
        console.log(randomNum);
    }
}

Puzzle.generatePuzzlePhrase();