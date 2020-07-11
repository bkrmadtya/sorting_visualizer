const merge = (leftArr, rightArr) => {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  while (leftArr.length) {
    sortedArr.push(leftArr.shift());
  }

  while (rightArr.length) {
    sortedArr.push(rightArr.shift());
  }

  return sortedArr;
};

const mergeSort = (arrayToSort) => {
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  const midpoint = parseInt(arrayToSort.length / 2);
  const leftArr = arrayToSort.slice(0, midpoint);
  const rightArr = arrayToSort.slice(midpoint, arrayToSort.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

export default mergeSort;
