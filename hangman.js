var lives = 6;

function game() {
    const letter1 = document.getElementById("letter1");
    const letter2 = document.getElementById("letter2");
    const letter3 = document.getElementById("letter3");
    const letter4 = document.getElementById("letter4");
    const letter5 = document.getElementById("letter5");

    letter1.addEventListener("change", function (e) {
        if (e.key !== "T" && e.key !== "t") {
            lives--;
            alert("Wrong letter. Lives left: " + lives);
        } else {
            letter1.innerText = e.key;
        }
        checkGameStatus();
    });

    letter2.addEventListener("change", function (e) {
        if (e.key !== "I" && e.key !== "i") {
            lives--;
            alert("Wrong letter. Lives left: " + lives);
        } else {
            letter2.innerText = e.key;
        }
        checkGameStatus();
    });

    letter3.addEventListener("change", function (e) {
        if (e.key !== "G" && e.key !== "g") {
            lives--;
            alert("Wrong letter. Lives left: " + lives);
        } else {
            letter3.innerText = e.key;
        }
        checkGameStatus();
    });

    letter4.addEventListener("change", function (e) {
        if (e.key !== "E" && e.key !== "e") {
            lives--;
            alert("Wrong letter. Lives left: " + lives);
        } else {
            letter4.innerText = e.key;
        }
        checkGameStatus();
    });

    letter5.addEventListener("change", function (e) {
        if (e.key !== "R" && e.key !== "r") {
            lives--;
            alert("Wrong letter. Lives left: " + lives);
        } else {
            letter5.innerText = e.key;
        }
        checkGameStatus();
    });
}

function checkGameStatus() {
    const letter1 = document.getElementById("letter1");
    const letter2 = document.getElementById("letter2");
    const letter3 = document.getElementById("letter3");
    const letter4 = document.getElementById("letter4");
    const letter5 = document.getElementById("letter5");

    if (lives <= 0) {
        alert("You Lost");
        disableInputs();
    } else if (
        letter1.innerText.toLowerCase() === "t" &&
        letter2.innerText.toLowerCase() === "i" &&
        letter3.innerText.toLowerCase() === "g" &&
        letter4.innerText.toLowerCase() === "e" &&
        letter5.innerText.toLowerCase() === "r"
    ) {
        alert("You Won!");
        disableInputs();
    }
}

function disableInputs() {
    const letter1 = document.getElementById("letter1");
    const letter2 = document.getElementById("letter2");
    const letter3 = document.getElementById("letter3");
    const letter4 = document.getElementById("letter4");
    const letter5 = document.getElementById("letter5");

    letter1.setAttribute("disabled", true);
    letter2.setAttribute("disabled", true);
    letter3.setAttribute("disabled", true);
    letter4.setAttribute("disabled", true);
    letter5.setAttribute("disabled", true);
}

game();
