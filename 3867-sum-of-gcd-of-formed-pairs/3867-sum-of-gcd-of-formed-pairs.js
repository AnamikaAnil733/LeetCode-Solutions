/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
    let pregcd = []
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i]
        }
        pregcd.push(gcd(max, nums[i]))
    }
    pregcd.sort((a, b) => a - b)
    let sum = 0
    for (let j = 0; j < Math.floor(pregcd.length / 2); j++) {
        sum += gcd(pregcd[j], pregcd[pregcd.length - 1 - j])
    }
    return sum

};

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}