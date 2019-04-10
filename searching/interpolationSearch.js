const interpolationSearch = (arrayToSearch, valueToSearch) => {
  const { length } = arrayToSearch;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;

  while (low <= high && valueToSearch >= arrayToSearch[low] && valueToSearch <= arrayToSearch[high]) {
    delta = (valueToSearch - arrayToSearch[low]) / (arrayToSearch[high] - arrayToSearch[low]);
    position = low + Math.floor((high - low) * delta);

    if (arrayToSearch[position] === valueToSearch) {
      return position;
    }

    if (arrayToSearch[position] < valueToSearch) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1;
};

const sortedArray = [2, 4, 8, 14, 18, 27, 56, 68, 89];
const searchTerm = 27;

console.log('Searching for', searchTerm, 'in', sortedArray);
console.log(interpolationSearch(sortedArray, searchTerm));
