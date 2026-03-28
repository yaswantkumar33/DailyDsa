/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let out_arr=[];

    for(let i=0;i<nums.length;i++){
        if(i==0){
            out_arr.push(nums[i])
        }else{
            out_arr.push(out_arr[i-1]+nums[i])
        }
    }
    return out_arr;
};