import states from "../helper/states";

const bubbleSort = async (arrayToSort, updateArrayWithDelay) => {
  let arrayCopy = [...arrayToSort];
  let length = arrayCopy.length;

  while (length) {
    let activeEle = arrayCopy[0];
    activeEle.state = states.ACTIVE;

    for (let j = 1; j < length; j++) {
      const comparedEle = arrayCopy[j];
      comparedEle.state = states.ACTIVE;
      activeEle.state = states.ACTIVE;

      // await updateArrayWithDelay([...arrayCopy]);

      if (activeEle.value >= comparedEle.value) {
        comparedEle.state = states.SWAPPED;
        activeEle.state = states.SWAPPED;
        //   await updateArrayWithDelay([...arrayCopy]);

        const temp = activeEle;
        comparedEle.state = states.UNSORTED;
        temp.state = states.UNSORTED;

        arrayCopy[j - 1] = comparedEle;
        arrayCopy[j] = temp;
      } else {
        comparedEle.state = states.UNSWAPPED;
        activeEle.state = states.UNSWAPPED;
        //   await updateArrayWithDelay([...arrayCopy]);

        comparedEle.state = states.UNSORTED;
        activeEle.state = states.UNSORTED;

        activeEle = arrayCopy[j];
      }

      comparedEle.state = states.UNSORTED;
      activeEle.state = states.UNSORTED;
      // await updateArrayWithDelay([...arrayCopy]);
    }
    activeEle.state = states.SORTED;
    length -= 1;
  }
};

export default bubbleSort;
