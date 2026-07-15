/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
    let odd = []
    let even = []
    for (let i = 1; i <= n * 2; i++) {
        if (i % 2 == 0) {
            even.push(i)
        } else {
            odd.push(i)
        }
    }
    let sumeven = even.reduce((a, c) => a + c, 0)
    let sumodd = odd.reduce((a, c) => a + c, 0)
    let min = Math.min(sumeven,sumodd)
    for (let i = min; i >= 1; i--) {
        if (sumeven % i == 0 && sumodd % i == 0) {
            return i
        }
    }
};