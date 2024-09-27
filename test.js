const words = ["javascript", "programming", "developer", "hangman"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let hiddenWord = Array(selectedWord.length).fill('_');
let wrongGuesses = 0;
let maxWrongGuesses = 6;
let guessedLetters = [];

function updateDisplay() {
    document.getElementById("wordDisplay").textContent = hiddenWord.join(' ');
    document.getElementById("wrongGuesses").textContent = wrongGuesses;
    document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters.join(', ');
}

function guessLetter() {
    let guess = document.getElementById("guessInput").value.toLowerCase();
    document.getElementById("guessInput").value = "";

    if (guess.length !== 1 || !guess.match(/[a-z]/)) {
        document.getElementById("messageDisplay").textContent = "Please enter a valid letter!";
        return;
    }

    if (guessedLetters.includes(guess)) {
        document.getElementById("messageDisplay").textContent = "You already guessed that letter!";
        return;
    }

    guessedLetters.push(guess);
    let correctGuess = false;

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guess) {
            hiddenWord[i] = guess;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        wrongGuesses++;
        document.getElementById("messageDisplay").textContent = "Wrong guess!";
    } else {
        document.getElementById("messageDisplay").textContent = "";
    }

    updateDisplay();
    checkGameOver();
}

function checkGameOver() {
    if (hiddenWord.join('') === selectedWord) {
        document.getElementById("messageDisplay").textContent = "Congratulations! You've won!";
    } else if (wrongGuesses >= maxWrongGuesses) {
        document.getElementById("messageDisplay").textContent = `Game Over! The word was: ${selectedWord}`;
    }
}


updateDisplay();