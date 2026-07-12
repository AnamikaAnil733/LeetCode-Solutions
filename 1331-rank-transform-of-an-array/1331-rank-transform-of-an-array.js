/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let a = [...new Set(arr)].sort((a, b) => a - b)
    let rank = {}
    for (let i = 0; i < a.length; i++) {
        rank[a[i]] = i + 1
    }
    return arr.map((num) => rank[num])
};