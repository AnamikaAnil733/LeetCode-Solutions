/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function pali(s, i = 0, j = s.length - 1) {
        if (i >= j) {
            return true
        }
        if (s[i] !== s[j]) {
            return [i, j]
        }
        return pali(s, i + 1, j - 1)
    }
    let result = pali(s)
    if (result === true) return true;

    let [i, j] = result;

    let Left = s.slice(0, i) + s.slice(i + 1);
    let Right = s.slice(0, j) + s.slice(j + 1);

    return pali(Left) === true || pali(Right) === true;
};