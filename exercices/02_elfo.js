module.exports = function listGifts(letter) {
  letter = letter.replace(/\s{2,}/g, " ").trim();

  const regex = /_.*/;

  const list = letter.split(" ").filter((gift) => !regex.test(gift));

  const giftsList = {};

  list.forEach((gift) => {
    if (giftsList[gift]) {
      giftsList[gift]++;
    } else {
      giftsList[gift] = 1;
    }
  });

  return giftsList;
};
