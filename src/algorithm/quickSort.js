const quickSort = (arrayToSort, updateWithDelay) => {
  const partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }

    return i;
  };

  const sort = (array, left, right) => {
    let index;

    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        sort(array, left, index - 1);
      }

      if (index < right) {
        sort(array, index, right);
      }
    }

    return array;
  };

  const swap = (array, leftIndex, rightIndex) => {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  };
};

export default quickSort;
