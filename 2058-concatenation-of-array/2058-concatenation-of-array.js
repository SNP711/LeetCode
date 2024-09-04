/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    originalConcat = nums.length;
    for(i=0;i<originalConcat;i++)
    {
        nums.push(nums[i])
    }
    return nums
};