module.exports = function isValid(letter) {
  const stack = [];
  const operators = { "(": ")", "{": "}", "[": "]" };
  const closers = Object.values(operators);

  for (let i = 0; i < letter.length; i++) {
    if (operators[letter[i]] !== undefined) {
      stack.push(letter[i]);
    } else if (closers.includes(letter[i])) {
      if (operators[stack.pop()] === letter[i]) {
        if (operators[letter[i - 1]]) return false;
        return true;
      }
    }
  }

  return false;
};
