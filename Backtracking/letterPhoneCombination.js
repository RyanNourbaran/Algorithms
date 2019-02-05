/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = {2:["a","b","c"], 3:["d","e","f"], 4:["g","h","i"], 5:["j","k","l"], 6:["m","n","o"], 7:["p","q","r","s"], 8:["t","u","v"], 9:["w","x","y","z"]};
    let final = [];
    for (let i=0; i<digits.length;i++) {
        const letters = map[digits[i]];
        final = backtrack(final,letters);
    }
    return final;
};

function backtrack(final, letters) {
    let temp = [];
    if (final.length === 0) {
        for (let i=0; i<letters.length; i++) {
            temp.push(letters[i]);
            
        }
        return temp;
    }
    
    for (let i=0; i<final.length; i++) {
        for (let j=0; j<letters.length; j++) {
            temp.push(final[i]+letters[j]);
        }
    }
    return temp;
    
}