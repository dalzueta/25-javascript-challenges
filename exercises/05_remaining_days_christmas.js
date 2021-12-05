module.exports = function daysToXmas(date) {
  const christmas = new Date(
    "Dec 25, " + new Date().getFullYear() + " 00:00:00"
  );
  const diffTime = christmas - date;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
