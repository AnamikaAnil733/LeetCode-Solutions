/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    let n = [...nums]
    for (let i = nums.length - 1; i >= 0; i--) {
        n.push(nums[i])
    }
    return n
};