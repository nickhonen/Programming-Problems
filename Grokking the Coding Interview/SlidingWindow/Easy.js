function sliding_window(arr, K) {
  const result = [];
  let windowSum = 0.0, 
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }

  return result
}

function smallest_subarray_sum(S, arr) {
  let windowSum = 0,
    windowStart = 0,
    minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] // add the next element
    while (windowSum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      // Make window shorter until windowSum is not greater than S
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
 return (minLength === Infinity ? 0 : minLength);
}
// Expected: 2
console.log(`Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2]));
// Expected: 1
console.log(`Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 8]));