/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false
    let sc = new Array(26).fill(0)
    let pc = new Array(26).fill(0)
    for (let i = 0; i < s1.length; i++) {
        sc[s2.charCodeAt(i) - 97]++
        pc[s1.charCodeAt(i) - 97]++
    }
    if (sc.toString() == pc.toString()) {
        return true
    }
    for (let i = s1.length; i < s2.length; i++) {
        sc[s2.charCodeAt(i) - 97]++
        sc[s2.charCodeAt(i - s1.length) - 97]--
        if (sc.toString() == pc.toString()) {
            return true
        }
    }
    return false
};