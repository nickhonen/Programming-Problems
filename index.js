var removeDuplicates = function(nums) {
  // if nums.length === 1 return nums
  //initialize p1; set = to first index of nums
  // initialize p2; set = to second index of nums
  // initalize counter for duplicates
  // while p2 < nums.length
      // if equal, pop p2, push, and increment
      // if not equal, increment both
  
// first attempt
    if (nums.length === 1) return nums;
    let p1 = 0;
    let p2 = 1;
    let ogLen = nums.length
    // can you initialize more than one var on a line?
    while (p2 < ogLen) {
        if (nums[p1] === nums[p2]) {
            nums.splice(p2, 1);
            nums.push(nums[p2]);
            p2 += 1;
        } else {
            p1 += 1;
            p2 += 1;
        } 
        console.log(nums)
    }
    return nums
};