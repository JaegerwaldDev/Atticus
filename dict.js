async function getJson(url) {
    let result = {};
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        result = data;
    });
    return result;
};

async function main () {
    let dict = await getJson("dict.json");
    dict.forEach(word => {
        let element = document.createElement("p");

        let wordElement = document.createElement("span");
        if (word[0] == "#") {
            wordElement.className = "firstWord";
            word = word.replace("#","");
        } else if (word[0] == "+") {
            wordElement.className = "witnessed";
            word = word.replace("+","");
        }
        wordElement.textContent = word.split("|")[0];
        element.appendChild(wordElement);

        if (word.split("|").length > 1) {
            element.innerHTML += ` - <a href="${word.split("|")[1]}">Original message</a>`;
        }

        document.getElementById("dictionary").appendChild(element);
    });
}

main();