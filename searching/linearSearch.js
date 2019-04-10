const linearSearch = (array, searchTerm) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchTerm) return i;
  }

  return -1;
};

const arr = [9, 8, 7, 98, 64, 43, 74];
const searchTerm = 7;

console.log('Searching for', searchTerm, 'in', arr);
console.log(linearSearch(arr, searchTerm));
