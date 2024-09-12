function fizzBuzzArray(num) {
  let result = [];

  for (let item = 1; item <= num; item++) {
    if (item % 3 === 0 && item % 5 === 0) {
      result.push("FizzBuzz");
    } else if (item % 3 === 0) {
      result.push("Fizz");
    } else if (item % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(item);
    }
  }
  return result;
}

module.exports = fizzBuzzArray;
