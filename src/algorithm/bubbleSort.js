import states from "../helper/states";
const { ACTIVE, SORTED, SWAPPED, UNSORTED, UNSWAPPED } = states;

const bubbleSort = async (arrayToSort, updateArrayWithDelay) => {
  let arrayCopy = [...arrayToSort];
  let length = arrayCopy.length;

  while (length) {
    // first element and active position while comparing with other bar or elements
    let activeEle = arrayCopy[0];

    for (let j = 1; j < length; j++) {
      // element being compared with the first or active element
      const comparedEle = arrayCopy[j];

      // change state of active and compared element to ACTIVE
      activeEle.state = ACTIVE;
      comparedEle.state = ACTIVE;

      // update the view by updating the array in the state of the application
      await updateArrayWithDelay([...arrayCopy]);

      if (activeEle.height > comparedEle.height) {
        // update the two compared bar or element's state to SWAPPED in case the first element is larger than second element
        comparedEle.state = SWAPPED;
        activeEle.state = SWAPPED;

        // update the view by updating the array in the state of the application
        await updateArrayWithDelay([...arrayCopy]);

        // swap the position of the active and compared element
        const temp = activeEle;
        arrayCopy[j - 1] = comparedEle;
        arrayCopy[j] = temp;
      } else {
        // change state of active and compared element to UNSWAPPED
        comparedEle.state = UNSWAPPED;
        activeEle.state = UNSWAPPED;

        // update the view by updating the array in the state of the application
        await updateArrayWithDelay([...arrayCopy]);

        // change state of active element to UNSORTED as it is no longer the active element
        activeEle.state = UNSORTED;

        // change the active element to the next element i.e. larger element
        activeEle = arrayCopy[j];
      }

      // change state of active and compared element to UNSORTED as they are not sorted yet
      comparedEle.state = UNSORTED;
      activeEle.state = ACTIVE;

      // update the view by updating the array in the state of the application
      await updateArrayWithDelay([...arrayCopy]);
    }

    // change state of the last active element after a full iteration to SORTED
    activeEle.state = SORTED;

    // decrease the counter as the position larger than the counter will be already SORTED
    // hence smaller number of iteration
    length -= 1;

    // update the view by updating the array in the state of the application
    await updateArrayWithDelay([...arrayCopy]);
  }
};

export default bubbleSort;
