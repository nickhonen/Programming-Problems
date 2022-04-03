// 1. Two Sum Last Solved Feb 14

var twoSum = function(nums, target) {
    // initialize result array that will represent the indices of the answer
    const result = [];
    // initialize a variable representing the length of the array
    const oglength = nums.length; 
    // initialize counter variable set = to 0
    let counter = 0;
    // start while loop under condition while counter < ogArray.length
    while (counter < oglength) {
        // do a standard for loop through nums, initialize counter i
        for (let i = 0; i < oglength; i++) {
            //check if nums[i + 1] === undefined
            if (nums[i+1] === undefined) {
                counter++; // increment counter
                nums.shift();
                break; // break loop because whole array has been tested
            } else if (nums[0] + nums[i+1] === target) { 
                result.push(counter)
                result.push(i+1+counter);
                counter += Infinity;
            }   
        }
    }     
    //return result array
    return result;
}

 
 
 // 2. Palindrome Number - Last Solved Feb 10

var isPalindrome = function(x) {
    let reversedNum = 0
    let copy = x;

// see example 2, all negatives are not palindromes
if (x < 0) return false; 
let ogNum = x;
const arr = x.toString().split('');
const reversed = arr.reverse();
const joined = reversed.join('');
// if (joined === x) return true;
const revNumber = Number(joined);
return revNumber === x;
// turn into string with toString
// returns boolean
};

// 3. Roman to Integer - Last Solved Feb 13

var romanToInt = function(s) { 
    const inputArr = s.split('');
    const len = s.length;
    let result = 0;
    const numerals = {
       I: 1,
       V: 5,
       X: 10,
       L: 50, 
       C: 100,
       D: 500,
       M: 1000
   } 
    inputArr.reverse();
    for (let a = 0; a < len; a++) {
        const curr = inputArr[a];
        const next = inputArr[a+1];
        if (numerals[curr] <= numerals[next]) {
            result += numerals[curr];
        } else if (numerals[curr] > numerals[next]) {
            result += numerals[curr] - numerals[next];
            a++;
        } else {
            result += numerals[curr];
        }
        console.log(result)
   }
    return result;
};

// 4. isValid - Last solved Feb 15.

var isValid = function(s) {
    const closePar = ['}', ')', ']'];
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const arr = s.split('');
    if (s.length % 2 !== 0) return false;

    const result = function recurse() {
        let firstClose = arr.find(element => closePar.includes(element));
        let firstCloseIndex = arr.findIndex(element => closePar.includes(element));
        let lastOpen = arr[firstCloseIndex - 1];
        let lastOpenIndex = firstCloseIndex - 1;
        s = arr.length;
        console.log(obj[lastOpen])
        console.log(firstClose);
        
        if (s <= 0) {
            return true;
        } else if (obj[lastOpen] !== firstClose || firstClose === undefined) {
            return false;
        } else {
            arr.splice(lastOpenIndex, 2);
            return recurse();
        }
    }
    return result();
}