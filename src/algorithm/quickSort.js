const quickSort = async (array, updateWithDelay) => {
  const arrayToSort = [...array];

  const partition = async (array, left, right) => {
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

  const sort = async (array, left, right) => {
    let index;

    if (array.length > 1) {
      index = await partition(array, left, right);

      if (left < index - 1) {
        await sort(array, left, index - 1);
      }

      if (index < right) {
        await sort(array, index, right);
      }
    }

    return array;
  };

  const swap = (array, leftIndex, rightIndex) => {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  };

  console.log(arrayToSort);
  return arrayToSort;
};

export default quickSort;
