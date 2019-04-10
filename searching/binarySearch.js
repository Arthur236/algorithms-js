const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const sortedArray = [2, 4, 8, 14, 18, 27, 56, 68, 89];
const searchTerm = 56;

console.log('Searching for', searchTerm, 'in', sortedArray);
console.log(binarySearch(sortedArray, searchTerm));
