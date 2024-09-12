function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  words.map((word, index) => {
    words[index] = words[index][0].toUpperCase() + words[index].slice(1);
  });

  return words.join(" ");
}

module.exports = titleCase;
