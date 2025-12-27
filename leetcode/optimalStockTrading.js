export default function optimalStockTrading(prices) {
  let profit = 0
  if(prices.length === 0) return profit
  let min =  Number.MAX_SAFE_INTEGER

  for(let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min)

    profit = Math.max(profit, prices[i] - min)
  }

  return profit
}