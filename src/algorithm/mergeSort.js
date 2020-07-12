import states from "helper/states";
const { ACTIVE, UNSWAPPED, SWAPPED, SORTED, UNSORTED } = states;

const mergeSort = async (array, updateArrayWithDelay) => {
  // copy of original array to track the position and state of changing element
  let arrayToSort = [...array];

  // normal merge sort method
  const sort = async (array) => {
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

  // method to compare, sort and merge two array
  const merge = async (leftArr, rightArr) => {
    const sortedArr = [];
    const leastIndex = getLeastIndex(arrayToSort, leftArr[0], rightArr[0]);

    while (leftArr.length && rightArr.length) {
      const activeEle = leftArr[0];
      const comparedEle = rightArr[0];

      // update the two compared bar or element's state to active
      updateArray(arrayToSort, activeEle, comparedEle, ACTIVE);
      // update the view by updating the array in the state of the application
      await updateArrayWithDelay([...arrayToSort]);

      const currentIndex = sortedArr.length;

      if (activeEle.height < comparedEle.height) {
        // update the two compared bar or element's state to SWAPPED in case the first element is smaller than second element
        updateArray(arrayToSort, activeEle, comparedEle, UNSWAPPED);
        // update the view by updating the array in the state of the application
        await updateArrayWithDelay([...arrayToSort]);

        sortedArr.push(leftArr.shift());

        // change the position of the active element in the original array
        changeElementPostition(
          arrayToSort,
          activeEle,
          currentIndex,
          leastIndex
        );
      } else {
        // update the two compared bar or element's state to UNSWAPPED in case the first element is LARGER than second element
        updateArray(arrayToSort, activeEle, comparedEle, SWAPPED);
        // update the view by updating the array in the state of the application
        await updateArrayWithDelay([...arrayToSort]);

        sortedArr.push(rightArr.shift());

        // change the position of the compared element in the original array
        changeElementPostition(
          arrayToSort,
          comparedEle,
          currentIndex,
          leastIndex
        );
      }
      // revert the state of the bar or element to UNSORTED
      updateArray(arrayToSort, activeEle, comparedEle, UNSORTED);
      // update the view by updating the array in the state of the application
      await updateArrayWithDelay([...arrayToSort]);
    }

    while (leftArr.length) {
      sortedArr.push(leftArr.shift());
    }

    while (rightArr.length) {
      sortedArr.push(rightArr.shift());
    }

    return sortedArr;
  };

  let sortedArray = await sort(array);

  // changed the state of the bar or elements to SORTED
  sortedArray = sortedArray.map((i) => {
    i.state = SORTED;
    return i;
  });

  // update the view by updating the array in the state of the application
  updateArrayWithDelay([...sortedArray]);
};

export default mergeSort;

// get the least index of the first element of broken arrays from the original array
const getLeastIndex = (array, firstEle, secondEle) => {
  const indexOfFirstEle = array.indexOf(firstEle);
  const indexOfSecondEle = array.indexOf(secondEle);

  return indexOfFirstEle < indexOfSecondEle
    ? indexOfFirstEle
    : indexOfSecondEle;
};

// change the state of active and compared element in the original array
const updateArray = (array, firstEle, secondEle, state) => {
  const indexOfFirstEle = array.indexOf(firstEle);
  const indexOfSecondEle = array.indexOf(secondEle);

  array[indexOfFirstEle].state = state;
  array[indexOfSecondEle].state = state;

  return array;
};

// https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
const changeElementPostition = (array, firstEle, currentIndex, leastIndex) => {
  const indexOfFirstEle = array.indexOf(firstEle);

  array.splice(
    leastIndex + currentIndex,
    0,
    array.splice(indexOfFirstEle, 1)[0]
  );
};
