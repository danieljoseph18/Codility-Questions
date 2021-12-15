//O(n**2) time complexity (could be optimised)
//loops through array of stock prices and returns the maximum possible profit of a perfect buy and sell

function solution(A) {
    let currentPrice = 0;
    let maxPrice = 0;
    let maxProfit = 0;
    let currentProfit = 0;
    for(let i=0; i<A.length; i++){
        currentPrice = A[i];
        maxPrice = 0;
        for(let j=i+1; j<A.length; j++){
            if(A[j] > currentPrice){
                if(maxPrice < A[j]){
                    maxPrice = A[j];
                    currentProfit = maxPrice - currentPrice;
                    if(currentProfit > maxProfit){
                        maxProfit = currentProfit;
                    }
                }
            }
        }
    }
    return maxProfit
}
