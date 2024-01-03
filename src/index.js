import Puzzle from "./Puzzle.js";

const puzzle = new Puzzle();

const wordsToPlay = puzzle.generatePuzzlePhrase();

function displayPuzzle(arrayOfWordBlocks) {
  const wordBoard = document.getElementById("word-board");

  const wordBlocks = createWordBlocks(arrayOfWordBlocks);

  for (let i = 0; i < wordBlocks.length; i++) {
    wordBoard.appendChild(wordBlocks[i]);
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
  //users shouldn't know how long a word is, so every word will appear as 12 blocks, with only the first letter revealed
  for (let i = 0; i < 11; i++) {
    const letterContainer = document.createElement("div");
    letterContainer.className = "letter-container";
    letterContainer.innerHTML = word[i] || "&nbsp;";
    wordBlock.appendChild(letterContainer);
  }
  console.log(wordBlock);
  return wordBlock;
}

console.log(wordsToPlay);

displayPuzzle(wordsToPlay);
