// Original Solution

var containsDuplicate = function (nums) {
  let array = nums;
  for (let i = 0; i < nums.length; i++) {
    array = array.slice(1);
    if (array.includes(nums[i])) {
      return true;
    }
  }
  return false;
};

//Second method using Map() (Has to map entire array but code is more readable)
var containsDuplicate = function (nums) {
  //create a new hashmap with all the items in the array. Any duplicates will be removed.
  const totalWithoutDuplicates = new Map(nums.map((i) => [i]));

  //check if the size of the initial array is larger than the new hashmap.
  return totalWithoutDuplicates.size !== nums.length;
};

//Third method using Set() (Fastest runtime at 91.95% and very readable code)
var containsDuplicate = function (nums) {
  //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
  return new Set(nums).size !== nums.length;
};
