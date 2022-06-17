// array is sorted

function pair_with_target_sum(arr, targetSum) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const currSum = arr[left] + arr[right];
    if (currSum === targetSum) {
      return [left, right];
    }

    if (targetSum < currSum) {
      left += 1; // need a pair with bigger sum, and array is sorted, so increment left
    } else {
      right -= 1; // need pair with smaller sum, decrement right
    }
  }
  return [-1, -1] // no solution could be found.
}