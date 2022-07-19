// initial submitted answer

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      return [map[target - nums[i], i]]
    } else {
      map[nums[i]] = i;
    }
  }
}
