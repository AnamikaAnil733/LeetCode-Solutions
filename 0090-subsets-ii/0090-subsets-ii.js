/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)
    let final = []
    let subset = []
    function BackTrack(index) {
        final.push([...subset])
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] == nums[i - 1]) continue;
            subset.push(nums[i])
            BackTrack(i + 1)
            subset.pop()
        }
    }
    BackTrack(0)
    return final
};