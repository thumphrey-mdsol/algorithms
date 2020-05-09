var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    let output = []
    for(let i=0;i<candies.length;i++){
        if(candies[i]>max){
            max = candies[i]
        }
    }
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=max){
            output.push(true)
        } else{
            output.push(false)
        }
    }
    return output
};