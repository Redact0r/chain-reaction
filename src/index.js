import Puzzle from "./Puzzle.js";

const puzzle = new Puzzle();

const wordsToPlay = puzzle.generatePuzzlePhrase();

function displayPuzzle(arrayOfWordBlocks) {
  const wordBoard = document.getElementById("word-board");

  const wordBlocks = createWordBlocks(arrayOfWordBlocks);

  for (let i = 0; i < wordBlocks.length; i++) {
    wordBoard.innerHTML += wordBlocks[i];
  }

  return wordBoard;
}

function createWordBlocks(arrayOfWords) {
  let puzzleArray = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    const word = createLetterBlocks(arrayOfWords[i]);

    puzzleArray.push(word);
  }

  return puzzleArray;
}

function createLetterBlocks(word) {
  let wordBlock = document.createElement("div");
  wordBlock.className = "word-container";
  for (let i = 0; i < word.length; i++) {
    const letterContainer = document.createElement("div");
    letterContainer.className = "letter-container";
    letterContainer.innerHTML = word[i];
    wordBlock.innerHTML += letterContainer;
  }
  console.log(wordBlock);
  return wordBlock;
}

console.log(wordsToPlay);

displayPuzzle(wordsToPlay);
