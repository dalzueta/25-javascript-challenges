module.exports = (prices) => {
  let initialValue = prices[0];
  let profit = -1;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > initialValue) {
      const profitTemp = prices[i] - initialValue;
      profit = profit > profitTemp ? profit : profitTemp;
    } else if (prices[i] < initialValue) {
      initialValue = prices[i];
    }
  }
  return profit;
};
