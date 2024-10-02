function phoneNumberDirectory(phoneNumbers) {
  let directory = new Map();

  for (let entry of phoneNumbers) {
    const [name, number] = entry.split(":");

    directory.set(name, number);
  }

  return directory;
}

module.exports = phoneNumberDirectory;
