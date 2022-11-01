prices = [7,1,5,3,6,4];
var new_profit = 0;
var update_profit = 0;

var maxProfit = function(prices) {
    for(i = 1; i < prices.length; i++) {
        for(j = i+1; j < prices.length; j++) {
            new_profit = prices[j] - prices[i];
            if(new_profit > update_profit) {
                update_profit = new_profit;
            } 
        }
    }
    console.log(update_profit);
};

maxProfit(prices);