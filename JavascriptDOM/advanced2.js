let score = [88, 98, 77, 88];
let names = ['Ben', 'Joel', 'Judy', 'Anne'];

function addScore(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const scoreInput = document.getElementById("score");

    const name = nameInput.value.trim();
    const scoreValue = parseInt(scoreInput.value.trim());

    if (name === "" || isNaN(scoreValue) || scoreValue < 0 || scoreValue > 100) {
        alert("You must enter a name and a valid score between 0 and 100.");
        return;
    }

    names.push(name);
    score.push(scoreValue);
    alert("Score added successfully!");

    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
}

function displayResults(e) {
    let avg = 0;
    let highScore = score[0];
    let sum = 0;

    for (let index = 0; index < score.length; index++) {
        if (score[index] > highScore)
            highScore = score[index];
        sum += score[index];
    }

    avg = Math.ceil(sum / score.length);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    let title = document.createElement("h2");
    title.innerHTML = "Results";

    let average = document.createElement("p");
    average.innerHTML = "Average score = " + avg;

    let max = document.createElement("p");
    max.innerHTML = "High Score = " + highScore;

    resultsDiv.append(title, average, max);
}

function displayScores() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for (let index = 0; index < names.length; index++) {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.innerText = names[index];
        row.appendChild(nameCell);

        let scoreCell = document.createElement("td");
        scoreCell.innerText = score[index];
        row.appendChild(scoreCell);

        tbody.appendChild(row);
    }
}


window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add").addEventListener("click", addScore);
    document.getElementById("displayResults").addEventListener("click", displayResults);
    document.getElementById("displayScores").addEventListener("click", displayScores);
});
