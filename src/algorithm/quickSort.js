import states from "../helper/states";
const { ACTIVE, SORTED, SWAPPED, UNSORTED, UNSWAPPED, PIVOT } = states;

const quickSort = async (array, updateWithDelay) => {
  const arrayToSort = [...array];

  const partition = async (array, leftIndex, rightIndex) => {
    let pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    let left = leftIndex;
    let right = rightIndex;

    changeElementState(arrayToSort, pivot, PIVOT);
    updateArray(arrayToSort, array[left], array[right], ACTIVE);

    await updateWithDelay([...arrayToSort]);

    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }

      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        swap(array, left, right);

        left++;
        right--;
      }
    }

    return left;
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

  await sort(arrayToSort, 0, arrayToSort.length - 1);

  //   console.log(arrayToSort);
  //   return arrayToSort;
};

export default quickSort;

// change the state of active and compared element in the original array
const updateArray = (array, firstEle, secondEle, state) => {
  changeElementState(array, firstEle, state);
  changeElementState(array, secondEle, state);

  return array;
};

const changeElementState = (array, element, state) => {
  const indexOfEle = array.indexOf(element);
  array[indexOfEle].state = state;

  return array;
};
