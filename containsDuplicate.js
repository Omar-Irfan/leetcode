/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let newArr = []
  for(let i = 0; i < nums.length; i++ ) {
      if(newArr.includes(nums[i])){
          return true
      }
      newArr.push(nums[i])
  }
  return false
  
};