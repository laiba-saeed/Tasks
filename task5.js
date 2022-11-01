nums = [1,1,2];

var removeDuplicates = function (nums) {
  var uniqueCount = 1;
        
  for (let i = 1; i < nums.length; i++){
      
      if(nums[i] != nums[i+1]){
          nums[uniqueCount] = nums[i];
          uniqueCount += 1;
      }
  }
  console.log(uniqueCount);
}

removeDuplicates(nums);
