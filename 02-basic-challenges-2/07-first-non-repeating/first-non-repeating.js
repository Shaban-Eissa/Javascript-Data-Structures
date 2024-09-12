function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
