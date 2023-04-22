//Each word has words that can go after it.
//Each word has words that can before it.
//The words should spell some sort of phrase that makes sense.

//Example:
//COMMON COLD CUT BACK LIGHT TOUCH BASE BALL

const wordBank = [
    {
        word: "common", before:["in"], after:["cold", "ground"]
    },
    {
        word: "cut", before:["common", "hair"], after:["back", "away"]
    },
    {
        word: "back", before:["throw", "cut"], after:["up", "light", "ground"]
    },
    {
        word: "light", before:["back", "torch", "flash"], after:["touch", "house"]
    },
    {
        word: "touch", before:["light", "tender"], after:["base", "tone"]
    },
    {
        word: "base", before: ["touch", "first", "second", "third", "home"], after: ["ball", "board"]
    },
    {
        word: "ball", before: ["base", "play", "foot", "basket", "racket", "ground"], after: ["game", "ground"]
    },
    {
        word: "play", before: ["foul", "power", "horse", "broadway"], after: ["ground", "ball", "tag", "wright", "games"]
    },
    {
        word: "ground", before: ["play", "foul", "back", "ball", "hallowed"], after: ["beef", "sausage", "ball", "up", "out"]
    }
]

export default wordBank;