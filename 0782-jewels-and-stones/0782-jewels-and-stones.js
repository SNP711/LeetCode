/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   count=0
    stones.split('').filter((value)=> 
    {
   if(jewels.includes(value)){
    count++
   }
    }
    )
    return count
   
};