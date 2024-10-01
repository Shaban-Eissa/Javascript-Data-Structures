function validatePassword(password) {
  const passwordLength = password.length >= 8;

  const hasUppercase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigits = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  return passwordLength && hasUppercase && hasLowercase && hasDigits;
}

module.exports = validatePassword;
