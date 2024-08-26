/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
 while(num>=10){
    num = num.toString().split('').reduce((total, value)=> total+parseInt(value),0)
 }
 return num
};