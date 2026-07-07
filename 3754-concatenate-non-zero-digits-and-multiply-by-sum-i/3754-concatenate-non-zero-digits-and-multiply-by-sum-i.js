/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let m = n.toString().split("0").join('').split('')
    let sum = 0
    for(let i=0;i<m.length;i++){
        sum +=  +m[i]
    }
    return sum *m.join("")
};