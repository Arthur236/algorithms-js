// Split the array into halves and merge them recursively
const mergeSort = (arr) => {
  if (arr.length === 1) {
    // Return once we get an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // Get the middle item of the array rounded down
  const left = arr.slice(0, middle); // Items on the left side
  const right = arr.slice(middle); // Items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
};

// Compare the arrays item by item and return the concatenated result
const merge = (left, right) => {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list));
