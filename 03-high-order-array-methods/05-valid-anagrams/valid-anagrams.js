function validAnagrams(str1, str2) {
  const freqCountForStr1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCountForStr2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCountForStr1).every(
    (char) => freqCountForStr1[char] === freqCountForStr2[char]
  );
}

module.exports = validAnagrams;
