let scoreA = 0;
let scoreB = 0
let homescore = document.getElementById('home-score');
let guestscore = document.getElementById('guest-score');
homescore.textContent = scoreA;
guestscore.textContent = scoreB;

function homeAdd1Point() {
    homescore.textContent = scoreA +=1
}

function homeAdd2Points() {
    homescore.textContent = scoreA += 2
}

function homeAdd3Points() {
    homescore.textContent = scoreA += 3
}

function guestAdd1Point() {
    guestscore.textContent = scoreB += 1
}

function guestAdd2Points() {
    guestscore.textContent = scoreB += 2
}

function guestAdd3Points() {
    guestscore.textContent = scoreB += 3
}

