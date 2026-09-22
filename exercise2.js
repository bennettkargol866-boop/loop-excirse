const runCollatzTracker = function (promptFn) {
  let startValue = "";

  while (true) {
    startValue = promptFn("Enter a positive whole number to start the Collatz sequence.");

    if (startValue === null) {
      console.log("Invalid input. Please enter a positive whole number.");
      continue;
    }

    if (startValue.trim() === "") {
      console.log("Blank input is not allowed. Please try again.");
      continue;
    }

    const numericValue = Number(startValue);

    if (
      Number.isNaN(numericValue) ||
      !Number.isInteger(numericValue) ||
      numericValue <= 0
    ) {
      console.log("Invalid input. Please enter a positive whole number.");
      continue;
    }

    break;
  }

  let currentValue = Number(startValue);
  const sequence = [currentValue];
  let stepCount = 0;
  let largestValue = currentValue;

  console.log(`Starting value: ${currentValue}`);
  console.log(currentValue);

  while (currentValue !== 1) {
    if (currentValue % 2 === 0) {
      currentValue = currentValue / 2;
    } else {
      currentValue = currentValue * 3 + 1;
    }

    sequence.push(currentValue);
    stepCount += 1;

    if (currentValue > largestValue) {
      largestValue = currentValue;
    }

    console.log(currentValue);
  }

  console.log(`Changes required to reach 1: ${stepCount}`);
  console.log(`Largest value reached: ${largestValue}`);

  return {
    sequence: sequence.join(", "),
    stepCount: stepCount,
    largestValue: largestValue,
  };
};

if (typeof window !== "undefined") {
  window.runCollatzTracker = runCollatzTracker;
}

if (typeof module !== "undefined") {
  module.exports = { runCollatzTracker };
}
