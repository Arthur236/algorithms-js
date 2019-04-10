const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr.pop();

  return [
    ...quickSort(arr.filter(e => e <= pivot)),
    pivot,
    ...quickSort(arr.filter(e => e > pivot)),
  ];
};

const array = [3, 0, 2, 5, -1, 4, 1];

console.log('Original array:', array, 'Sorted array:', quickSort(array));
