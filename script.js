let user_score = 0,
    comp_score = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const resultSpan = document.getElementById("result");

const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const stoneButton = document.getElementById("s");

const choice = {
    "r": "Rock",
    "p": "Paper",
    "s": "Scissors"
}

function victory(comp) {
    user_score++;
    userScore_span.innerHTML = user_score;
    compScore_span.innerHTML = comp_score;
    resultSpan.innerHTML = "You Win, Computer chose <b>" + choice[comp] + "</b>!";
}

function defeat(comp) {
    comp_score++;
    userScore_span.innerHTML = user_score;
    compScore_span.innerHTML = comp_score;
    resultSpan.innerHTML = "You Lose, Computer chose <b>" + choice[comp] + "</b>!";
}

function draw(comp) {
    resultSpan.innerHTML = "That's a tie, Computer chose <b>" + choice[comp] + "</b>!";
}

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random() * 3)];
}

function check(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            victory(compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            defeat(compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(compChoice);
            break;
    }
}

rockButton.addEventListener("click", function () {
    check("r");
});
paperButton.addEventListener("click", function () {
    check("p");
});
stoneButton.addEventListener("click", function () {
    check("s");
});