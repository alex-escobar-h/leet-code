const maxProfit = (prices: number[]): number => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // Update the minimum price encountered so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // Calculate the profit by selling at prices[i]
    const profit = prices[i] - minPrice;

    // Update the maximum profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(5 < Infinity);
