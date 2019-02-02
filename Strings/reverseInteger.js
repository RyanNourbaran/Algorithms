/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? "-": "";
    
    let s = Math.abs(x).toString();

    s = s.split("").reverse().join("");
    if (Math.abs(parseInt(sign+s)) > Math.pow(2,31)-1) return 0;
    return (parseInt(sign+s));
    
};