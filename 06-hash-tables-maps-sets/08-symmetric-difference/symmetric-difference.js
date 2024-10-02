function symmetricDifference(arr1, arr2) {
  let Set1 = new Set(arr1);
  let Set2 = new Set(arr2);

  let result = [];

  for (let num of arr1) {
    if (!Set2.has(num)) {
      result.push(num);
    }
  }

  for (const num of arr2) {
    if (!Set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

module.exports = symmetricDifference;
