/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   var count = {};
   var majorityCount = Math.floor(nums.length/2);

   for(i=0;i<nums.length;i++){
    var num = nums[i];

    count[num] = (count[num] || 0) + 1;

    if(count[num]>majorityCount)
    {
        return num;
    }
   }
   return -1;

};