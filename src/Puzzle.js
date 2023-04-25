import wordBank from "./wordbank.js";

class Puzzle {
  puzzleLength = 0;
  usedWords = [];

  generatePuzzlePhrase = () => {
    let wordsArray = [];
    const maxLimit = wordBank.length;
    const firstWordIndex = Math.floor(Math.random() * maxLimit);

    const firstWordObj = wordBank[firstWordIndex];
    const firstWord = firstWordObj.word;

    this.usedWords.push(firstWord);
    wordsArray.push(firstWord);

    for (let i = 0; i <= 4; i++) {
      const newWord = this._getNextWord(
        this.usedWords[this.usedWords.length - 1]
      );
      this.usedWords.push(newWord);
      wordsArray.push(newWord);
      //end is just a placeholder until i have more data so there's nothing circular happening.
      if (newWord == "end") return wordsArray;
    }

    return wordsArray;
  };

  _getNextWord = (word) => {
    const currentWord = wordBank.find((w) => w.word === word);
    const currentWordAfterArray = currentWord.after;
    //too avoid repetitiveness, we are going to ensure no word can repeat itself in the same puzzle.
    //we will achieve this by taking the list of words already used and filtering those out of the possible choices of the "after" array
    const currentWordFilteredArray = this._filterWordArray(
      currentWordAfterArray
    );
    const randomValidIndex = Math.floor(
      Math.random() * currentWordFilteredArray.length
    );
    const randomValidNextWord = currentWordFilteredArray[randomValidIndex];

    const nextWordObj = wordBank.find((w) => w.word === randomValidNextWord);
    const nextWord = nextWordObj && nextWordObj.word ? nextWordObj.word : "end";

    return nextWord;
  };

  _filterWordArray = (arr) => {
    let newArr = arr;
    for (let i; i < arr.length; i++) {
      const word = arr[i];

      if (this._checkIfWordHasBeenUsed(word)) {
        const index = arr.indexOf(word);
        arr.splice(index, 1);
      }
    }

    return newArr;
  };

  _checkIfWordHasBeenUsed = (word) => {
    const wordCheck = this.usedWords.find((w) => w.word === word);

    return wordCheck !== undefined ? true : false;
  };
}

export default Puzzle;
