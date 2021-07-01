/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let numLength = nums.length
  let i = 0
  while(i < numLength){
      if(nums[i] === 0){
          nums.splice(i, 1)
          nums.push(0)
          numLength-- 
      }
      else{
          i++
      }
  }
};