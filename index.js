let homeScoreEl = document.getElementById('home-score')
console.log(homeScoreEl)
let guestScoreEl = document.getElementById('guest-score')
homeScoreEl.textContent = 0;
console.log(guestScoreEl)
guestScoreEl.textContent = 0;
let homeScore = 0;
let guestScore = 0;

function hincrementby1() {
    homeScore++;
    homeScoreEl.textContent = homeScore;

}

function hincrementby2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;

}

function hincrementby3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;

}


function gincrementby1() {
    guestScore++;
    guestScoreEl.textContent = guestScore;

}

function gincrementby2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;

}

function gincrementby3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;

}
let resetEl = document.getElementById('reset')

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}