
function moveZeros(arr) {
    const newArr = [];
    // for each on array
    // check if current value is zero, slice it
    // then push a new 0 to end of array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        newArr.push(0);
      }
    }
    console.log(newArr);
    console.log(arr);
    return arr;
}

console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]));