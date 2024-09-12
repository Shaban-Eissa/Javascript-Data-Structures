function arrayIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let intersection = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersection.push(num);
    }
  }
  return intersection;
}

module.exports = arrayIntersection;
