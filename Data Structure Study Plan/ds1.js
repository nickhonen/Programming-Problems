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


// Day 2 2-17: Two Sum (O(n)) and Merge Sorted Array 

/* 
https://leetcode.com/problems/two-sum/
https://leetcode.com/problems/merge-sorted-array/
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let map = new Map();
    let requiredNum = 0;
    for (let i = 0; i<nums.length; i++) {
        requiredNum = target - nums[i];
        if (map.has(requiredNum)) {
            return [nums.indexOf(requiredNum), i];
        } else {
            map.set(nums[i], i);
        }
    }
}

console.log(twoSum([2, 6, 2, 3], 5)); //should return [0, 3]
console.log(twoSum([3,2,4], 6)); //should return [1, 2]

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 var merge = function(nums1, m, nums2, n) {
    if (n === 0) return nums1;
    if (m === 0 && nums1.length >= 1) {
        nums1.splice(0, nums1.length, ...nums2);
        return nums1;
    }
    let zeros = nums1.length - m;
    nums1.splice(m, zeros, ...nums2);
    return nums1.sort((a, b) => a - b);
    // m is length of nums1 without the zeroes
    // n is length of nums2
    };

const a = [4,0,0,0,0,0];
const m = 1;
const b = [1,2,3,5,6];
const n = 5;
console.log(merge(a, m, b, n));