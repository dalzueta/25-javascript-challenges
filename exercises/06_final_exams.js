module.exports = function sumPairs(numbers, result) {
  let toReturn = null;

  for (let i = 0; i < numbers.length; i++) {
    const r = numbers.filter(
      (x) => numbers.indexOf(x) != i && numbers[i] + x == result
    );
    if (r.length > 0) {
      toReturn = [numbers[i], r[0]];
      break;
    }
  }

  return toReturn;
};
