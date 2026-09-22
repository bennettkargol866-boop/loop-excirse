const runExactChangeMachine = function (promptFn) {
  let entry = "";

  while (true) {
    entry = promptFn("Enter a whole number of cents from 1 through 499.");

    if (entry === null) {
      console.log("Invalid input. Please enter a whole number from 1 through 499.");
      continue;
    }

    if (entry.trim() === "") {
      console.log("Blank input is not allowed. Please try again.");
      continue;
    }

    const amount = Number(entry);

    if (
      Number.isNaN(amount) ||
      !Number.isInteger(amount) ||
      amount < 1 ||
      amount > 499
    ) {
      console.log("Invalid input. Please enter a whole number from 1 through 499.");
      continue;
    }

let centsLeft = amount;
let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

while (centsLeft >= 25) {
    centsLeft -= 25;
    quarters += 1;
}

dimes = Math.floor(centsLeft / 10);
centsLeft %= 10;

nickels = Math.floor(centsLeft / 5);
centsLeft %= 5;

pennies = centsLeft;
  
const result =
`${amount} cents becomes ${quarters} quarter${quarters === 1 ? "" : "s"}, `
+ `${dimes} dime${dimes === 1 ? "" : "s"}, `
+ `${nickels} nickel${nickels === 1 ? "" : "s"}, and `
+ `${pennies} penn${pennies === 1 ? "y" : "ies"}.`;

console.log(result);
return result;
  }
};