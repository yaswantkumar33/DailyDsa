/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    let firstlargest = -Infinity;
    let secondlargest = -Infinity;
    let thirdlargest = -Infinity;
    
    let numsunique = [...new Set(nums)];
    
    if(numsunique.length < 3) return Math.max(...numsunique); 
    for (let i=0;i<numsunique.length;i++){
        if (numsunique[i] === firstlargest || numsunique[i] === secondlargest || numsunique[i] === thirdlargest) continue;
        if(numsunique[i]> firstlargest){
            thirdlargest=secondlargest;
            secondlargest=firstlargest;
            firstlargest=numsunique[i];
        }else if (numsunique[i]>secondlargest){
            thirdlargest=secondlargest;
            secondlargest=numsunique[i];
        }else if(numsunique[i]>thirdlargest){
            thirdlargest=numsunique[i]
        }
        
    }
    return thirdlargest;

};