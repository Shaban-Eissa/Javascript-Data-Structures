function areAllCharactersUnique(str) {
  let charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }
  return true;
}

module.exports = areAllCharactersUnique;
