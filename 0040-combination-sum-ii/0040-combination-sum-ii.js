/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let com = []
    candidates.sort((a, b) => a - b)
    function BacKtrack(index, sub, sum) {
        if (sum == target) {
            com.push([...sub].sort((a, b) => a - b))
            return
        }
        if (sum > target || index > candidates.length - 1) {
            return
        }

        sub.push(candidates[index])
        BacKtrack(index + 1, sub, sum + candidates[index])
        sub.pop()
        while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) {
            index++;
        }
        BacKtrack(index + 1, sub, sum)
    }
    BacKtrack(0, [], 0)
    return com
};