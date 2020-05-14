var maxProfit = function(prices) {
    let min = prices[0]
    let profit = 0
    
    for(let i = 1 ; i < prices.length; i++ ){
        let curr = prices[i]
        
        const potential = curr - min
        profit = Math.max(profit, potential)
        min = Math.min(min, curr)
    }
    return profit
};