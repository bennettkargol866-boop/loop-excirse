const runNumberGatekeeper = function (promptFn) {
  let entry = "";
  let validNumber = NaN;

  while (true) {
    entry = promptFn("Enter a whole number from 10 through 99.");

    if (entry === null) {
      console.log("Invalid input. Please enter a whole number from 10 through 99.");
      continue;
    }

    if (entry.trim() === "") {
      console.log("Blank input is not allowed. Please try again.");
      continue;
    }

    validNumber = Number(entry);

    if (
      Number.isNaN(validNumber) ||
      !Number.isInteger(validNumber) ||
      validNumber < 10 ||
      validNumber > 99
    ) {
      console.log("Invalid input. Please enter a whole number from 10 through 99.");
      continue;
    }

    break;
  }

  const tensDigit = Math.floor(validNumber / 10);
  const onesDigit = validNumber % 10;
  const isEven = validNumber % 2 === 0;
  const digitsMatch = tensDigit === onesDigit;

  let result = `Valid number: ${validNumber}. It is ${isEven ? "even" : "odd"}. `;

  if (digitsMatch) {
    result += "The two digits are the same.";
  } else if (tensDigit > onesDigit) {
    result += `The tens digit (${tensDigit}) is larger than the ones digit (${onesDigit}).`;
  } else {
    result += `The ones digit (${onesDigit}) is larger than the tens digit (${tensDigit}).`;
  }

  console.log(result);
  return result;
};

if (typeof window !== "undefined") {
  window.runNumberGatekeeper = runNumberGatekeeper;
}

if (typeof module !== "undefined") {
  module.exports = { runNumberGatekeeper };
}
