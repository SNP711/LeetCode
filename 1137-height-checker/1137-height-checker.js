/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    count = 0;
   var new_array =[...heights].sort((a, b)=> a-b)
   for(let i=0;i<new_array.length;i++){
       if(new_array[i]!==heights[i]){
        count++
       }
   }
    return count
};