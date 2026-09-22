const runUsernameRepairShop = function (promptFn) {
  let username = "";
  let trimmed = "";
  let valid = false;

  do {
    username = promptFn("Enter a username that is 6 to 14 characters long, has no spaces, and starts with a letter.");

    if (username === null) {
      console.log("Username entry was cancelled.");
      continue;
    }

    trimmed = username.trim();

    if (trimmed.length < 6 || trimmed.length > 14) {
      console.log("Invalid username: it must be 6 to 14 characters long.");
      valid = false;
      continue;
    }

    if (trimmed.includes(" ")) {
      console.log("Invalid username: it cannot contain spaces.");
      valid = false;
      continue;
    }

    const firstCharacter = trimmed.charAt(0);
    const lowerFirst = firstCharacter.toLowerCase();

    if (lowerFirst < "a" || lowerFirst > "z") {
      console.log("Invalid username: the first character must be a letter.");
      valid = false;
      continue;
    }

    valid = true;
  } while (!valid);

  const displayName = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();

  console.log(`Accepted username: ${trimmed}`);
  console.log(`Display name: ${displayName}`);

  return {
    username: trimmed,
    displayName: displayName,
  };
};

if (typeof window !== "undefined") {
  window.runUsernameRepairShop = runUsernameRepairShop;
}

if (typeof module !== "undefined") {
  module.exports = { runUsernameRepairShop };
}
