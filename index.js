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
let dict = [];

let bdayCountdown = document.getElementById("bdayCountdown");
let furryCountdown = document.getElementById("furryCountdown");

async function getStats() {
    stats = await getJson("stats.json");
    dict = await getJson("dict.json");
};

function getWords() {
    if ((dict.length || 0) == 0) {
        return "-";
    } else {
        return (dict.length || 0);
    }
}

function update() {
    getStats();

    knownWords.innerText = getWords();
    atticusAge.innerText = getAtticusAge();
    colonThrees.innerText = stats.colon_threes;

    bdayCountdown.innerText = formatDuration(getTimeToAtticusBirthday());
    furryCountdown.innerText = formatDuration(getTimeToAtticusFurry());
}

setTimeout(update, 1);
clearInterval(update);
setInterval(update, 1000);