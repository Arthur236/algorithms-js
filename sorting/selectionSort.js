const selectionSort = (arr) => {
  // Create a copy of the original unsorted array
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    // Set minimum value to the current iteration of i
    let min = i;

    for (let j = i + 1; j < newArr.length; j++) {
      // Compare the value with the current minimum value
      if (newArr[j] < newArr[min]) {
        min = j;
      }
    }

    // Swap the values
    const temp = newArr[i];
    newArr[i] = newArr[min];
    newArr[min] = temp;
  }

  return newArr;
};

const sortArray = [90, 8, 7, 23, 76, 69];
console.log(selectionSort(sortArray));
