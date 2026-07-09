/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) return []
    let result = []
    let sc = new Array(26).fill(0)
    let pc = new Array(26).fill(0)
    for (let i = 0; i < p.length; i++) {
        sc[s.charCodeAt(i) - 97]++
        pc[p.charCodeAt(i) - 97]++
    }
    if (sc.toString() == pc.toString()) {
        result.push(0)
    }
    for (let i = p.length; i < s.length; i++) {
        sc[s.charCodeAt(i) - 97]++
        sc[s.charCodeAt(i - p.length) - 97]--
        if (sc.toString() == pc.toString()) {
            result.push(i - p.length + 1)
        }
    }
    return result
};