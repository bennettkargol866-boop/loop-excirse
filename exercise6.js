let text = prompt("Enter a string:");

let compressed = "";
let currentCharacter = text[0];
let count = 1;

for (let i = 1; i < text.length; i++) {

    if (text[i] === currentCharacter) {
        count++;
    }
    else {
        compressed += currentCharacter + count;

        currentCharacter = text[i];
        count = 1;
    }
}

compressed += currentCharacter + count;

if (compressed.length < text.length) {
    console.log(compressed);
} else {
    console.log(text);
}