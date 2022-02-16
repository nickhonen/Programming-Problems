// Day 1 2-16: Contains Duplicate and Maximum Subarray
/* 
https://leetcode.com/problems/maximum-subarray/
https://leetcode.com/problems/contains-duplicate/

 * @param {number[]} nums
 * @return {boolean}
 */

 var containsDuplicate = function(nums) {
    
    // obj with each value in array and its frequency
    const obj = {};
    
    for (let key of nums) {
        if (obj[key]) {
            obj[key] += 1;
            return true;
        }
        else {
            obj[key] = 1;
        }
    }
    return false;
    console.log(obj);
        //if obj[key], ++1, also might be able to just return true here;
            
        //else, obj[key] == 1
        // this is because if it is iterating through an array, we know every value is covered at least once.
    
    // get values of object
    // if max of the array using spread is > 1 return true, else return false

};

/*
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    
    let maxNum = -Infinity;
    let currSum = 0;
    
    for (let i=0; i<nums.length; i++) {
        currSum += nums[i];
        console.log(currSum)
        if (maxNum < currSum) {
            maxNum = currSum;
        }
        if (currSum < 0) {
            currSum = 0;
        } 
    }
    return maxNum;
};
