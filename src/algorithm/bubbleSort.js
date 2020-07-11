import states from "../helper/states";
const { ACTIVE, SORTED, SWAPPED, UNSORTED, UNSWAPPED } = states;

const bubbleSort = async (arrayToSort, updateArrayWithDelay) => {
  let arrayCopy = [...arrayToSort];
  let length = arrayCopy.length;

  while (length) {
    let activeEle = arrayCopy[0];

    for (let j = 1; j < length; j++) {
      const comparedEle = arrayCopy[j];
      activeEle.state = ACTIVE;
      comparedEle.state = ACTIVE;

      await updateArrayWithDelay([...arrayCopy]);

      if (activeEle.height >= comparedEle.height) {
        comparedEle.state = SWAPPED;
        activeEle.state = SWAPPED;
        await updateArrayWithDelay([...arrayCopy]);

        const temp = activeEle;
        comparedEle.state = UNSORTED;
        temp.state = UNSORTED;

        arrayCopy[j - 1] = comparedEle;
        arrayCopy[j] = temp;
      } else {
        comparedEle.state = UNSWAPPED;
        activeEle.state = UNSWAPPED;
        await updateArrayWithDelay([...arrayCopy]);

        comparedEle.state = UNSORTED;
        activeEle.state = UNSORTED;

        activeEle = arrayCopy[j];
      }

      comparedEle.state = UNSORTED;
      activeEle.state = UNSORTED;
      await updateArrayWithDelay([...arrayCopy]);
    }
    activeEle.state = SORTED;
    length -= 1;
    await updateArrayWithDelay([...arrayCopy]);
  }
};

export default bubbleSort;
