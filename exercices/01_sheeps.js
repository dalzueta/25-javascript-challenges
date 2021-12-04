const containsLetter = (letters, collection) =>
  collection.reduce((acc, oveja) => {
    if (
      oveja.name.toLowerCase().includes(letters[0]) &&
      oveja.name.toLowerCase().includes(letters[1])
    ) {
      acc.push(oveja);
    }
    return acc;
  }, []);

module.exports = function contarOvejas(ovejas, letters, color) {
  ovejas = containsLetter(letters, ovejas).filter(
    (oveja) => oveja.color === color
  );

  return ovejas;
};
