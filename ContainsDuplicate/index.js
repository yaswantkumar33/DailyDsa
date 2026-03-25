/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {


    let retrun_val = false;
    let map = {}
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] != undefined) {
            retrun_val = true;
            break
        }
        map[nums[i]] = i;
    }
    return retrun_val;

};