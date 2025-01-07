async function getJson(url) {
    let result = {};
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        result = data;
    });
    return result;
};

let knownWords = document.getElementById("knownWords");
let atticusAge = document.getElementById("atticusAge");
let colonThrees = document.getElementById("colonThrees");
let stats = {words:"-",colon_threes:"-"};

let bdayCountdown = document.getElementById("bdayCountdown");
let furryCountdown = document.getElementById("furryCountdown");

async function getStats() {
    stats = await getJson("stats.json");
};

function update() {
    getStats();

    knownWords.innerText = stats.words;
    atticusAge.innerText = getAtticusAge();
    colonThrees.innerText = stats.colon_threes;

    bdayCountdown.innerText = formatDuration(getTimeToAtticusBirthday());
    furryCountdown.innerText = formatDuration(getTimeToAtticusFurry());
}

setInterval(update, 1);
clearInterval(update);
setInterval(update, 500);