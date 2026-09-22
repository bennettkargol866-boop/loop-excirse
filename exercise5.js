const runFirstUniqueCharacterDetective = function (promptFn) {
  const word = promptFn("Enter a word to find the first unique character.");

if (word === null || word.trim() === "") {
    console.log("Please enter a word.");
    return "Please enter a word.";
}
  const lowerWord = word.toLowerCase();
  let foundIndex = -1;
  let foundCharacter = "";

  for (let i = 0; i < lowerWord.length; i += 1) {
    const currentCharacter = lowerWord.charAt(i);

    if (currentCharacter === " " || currentCharacter === "-") {
      continue;
    }

    let count = 0;

    for (let j = 0; j < lowerWord.length; j += 1) {
      if (lowerWord.charAt(j) === currentCharacter) {
        count += 1;
      }
    }

    if (count === 1) {
      foundIndex = i + 1;
      foundCharacter = currentCharacter;
      break;
    }
  }

  if (foundIndex === -1) {
    console.log("No unique character.");
    return "No unique character.";
  }

  const result = `${foundCharacter} at position ${foundIndex}`;
  console.log(result);
  return result;
};

if (typeof window !== "undefined") {
  window.runFirstUniqueCharacterDetective = runFirstUniqueCharacterDetective;
}

if (typeof module !== "undefined") {
  module.exports = { runFirstUniqueCharacterDetective };
}
