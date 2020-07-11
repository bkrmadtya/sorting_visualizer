import states from "helper/states";
const { ACTIVE, UNSWAPPED, SWAPPED, SORTED } = states;

const mergeSort = async (array, updateArrayWithDelay) => {
  let arrayToSort = null;

  const sort = async (array) => {
    if (arrayToSort === null) {
      arrayToSort = [...array];
    }

    if (array.length < 2) {
      return array;
    }

    const midpoint = parseInt(array.length / 2);

    let leftArr = array.slice(0, midpoint);
    let rightArr = array.slice(midpoint, array.length);

    leftArr = await sort(leftArr);
    rightArr = await sort(rightArr);

    const mergedArray = await merge(leftArr, rightArr);

    return mergedArray;
  };

  const merge = async (leftArr, rightArr) => {
    const sortedArr = [];
    const leastIndex = getLeastIndex(arrayToSort, leftArr[0], rightArr[0]);
    const highestIndex = getHighestIndex(
      arrayToSort,
      leftArr[leftArr.length - 1],
      rightArr[rightArr.length - 1]
    );

    while (leftArr.length && rightArr.length) {
      const activeEle = leftArr[0];
      const comparedEle = rightArr[0];

      updateArray(arrayToSort, activeEle, comparedEle, ACTIVE);

      await updateArrayWithDelay([...arrayToSort]);

      if (activeEle.height < comparedEle.height) {
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

  const sortedArray = await sort(array);

  updateArrayWithDelay([...sortedArray]);
};

export default mergeSort;

const getLeastIndex = (array, firstEle, secondEle) => {
  const indexOfFirstEle = array.indexOf(firstEle);
  const indexOfSecondEle = array.indexOf(secondEle);

  return indexOfFirstEle < indexOfSecondEle
    ? indexOfFirstEle
    : indexOfSecondEle;
};

const getHighestIndex = (array, firstEle, secondEle) => {
  const indexOfFirstEle = array.indexOf(firstEle);
  const indexOfSecondEle = array.indexOf(secondEle);

  return indexOfFirstEle > indexOfSecondEle
    ? indexOfFirstEle
    : indexOfSecondEle;
};

const updateArray = (array, firstEle, secondEle, state) => {
  const indexOfFirstEle = array.indexOf(firstEle);
  const indexOfSecondEle = array.indexOf(secondEle);

  array[indexOfFirstEle].state = state;
  array[indexOfSecondEle].state = state;

  return array;
};

const changeElementPostition = (array, firstEle, secondEle) => {
  const indexOfFirstEle = array.indexOf(firstEle);
  const indexOfSecondEle = array.indexOf(secondEle);

  const temp = firstEle;
  array[indexOfFirstEle] = secondEle;
  array[indexOfSecondEle] = temp;

  return array;
};
