/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {}

    for (i = 0; i < nums.length; i++) {
        let needed = target - nums[i];

        if (map[needed] != undefined) {
            return [map[needed], i]
            break
        }
        map[nums[i]] = i
    }

};