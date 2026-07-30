/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {

let pushes = 0
for(let k=0;k<word.length;k++){
pushes +=  Math.floor(k/8)+1
}
return pushes
};