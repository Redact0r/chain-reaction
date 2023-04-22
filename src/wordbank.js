//Each word has words that can go after it.
//Each word has words that can before it.
//The words should spell some sort of phrase that makes sense.

//Example:
//COMMON COLD CUT BACK LIGHT TOUCH BASE BALL

export const wordBank = [
    {
        word: "common", before:["in"], after:["cold", "ground"]
    },
    {
        word: "cut", before:["common", "hair"], after:["back", "away"]
    },
    {
        word: "back", before:["throw", "cut"], after:["up", "light"]
    },
    {
        word: "light", before:["back", "torch", "flash"], after:["touch", "house"]
    }
]