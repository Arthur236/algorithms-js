let arrayLength;

const buildHeap = (arr) => {
  arrayLength = arr.length;

  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heapify(arr, i);
  }
};

const heapify = (arr, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < arrayLength && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < arrayLength && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
};

const swap = (arr, index_A, index_B) => {
  const temp = arr[index_A];

  arr[index_A] = arr[index_B];
  arr[index_B] = temp;
};

const heapSort = (arr) => {
  buildHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    arrayLength--;
    heapify(arr, 0);
  }
};

const list = [90, 8, 7, 23, 76, 69, 5];
console.log(heapSort(list));
