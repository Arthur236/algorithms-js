const jumpSearch = (arrayToSearch, valueToSearch) => {
  const { length } = arrayToSearch;
  let step = Math.floor(Math.sqrt(length));
  let lowerBound = 0;

  while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
    lowerBound = step;
    step += step;

    if (lowerBound >= length) {
      return -1;
    }
  }

  const upperBound = Math.min(step, length);

  while (arrayToSearch[lowerBound] < valueToSearch) {
    lowerBound++;
    if (lowerBound === upperBound) {
      return -1;
    }
  }

  if (arrayToSearch[lowerBound] == valueToSearch) {
    return lowerBound;
  }

  return -1;
};

const sortedArray = [2, 4, 8, 14, 18, 27, 56, 68, 89];
const searchTerm = 18;

console.log('Searching for', searchTerm, 'in', sortedArray);
console.log(jumpSearch(sortedArray, searchTerm));
