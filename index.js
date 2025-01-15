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
let colonThrees = document.getElementById("colonThrees");
let stats = {words:"-",colon_threes:"-"};
let dict = [];

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
    colonThrees.innerText = stats.colon_threes;
}

setTimeout(update, 1);
clearInterval(update);
setInterval(update, 1000);