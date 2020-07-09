import states from "../helper/states";

const bubbleSort = () => {
  const isSorted = isArraySorted(array);
  if (isSorted) return;

  // setSorting(true);

  let result = [...array];
  let length = result.length;

  while (length) {
    let active = result[0];
    active.state = states.ACTIVE;

    for (let j = 1; j < length; j++) {
      const comp = result[j];
      comp.state = states.ACTIVE;
      active.state = states.ACTIVE;

      // await updateWithDelay([...result], active, comp);

      if (active.value >= comp.value) {
        comp.state = states.SWAPPED;
        active.state = states.SWAPPED;
        //   await updateWithDelay([...result], active, comp);

        const temp = active;
        comp.state = states.UNSORTED;
        temp.state = states.UNSORTED;

        result[j - 1] = comp;
        result[j] = temp;
      } else {
        comp.state = states.UNSWAPPED;
        active.state = states.UNSWAPPED;
        //   await updateWithDelay([...result], active, comp);

        comp.state = states.UNSORTED;
        active.state = states.UNSORTED;

        active = result[j];
      }

      comp.state = states.UNSORTED;
      active.state = states.UNSORTED;
      // await updateWithDelay([...result], active, comp);
    }
    active.state = states.SORTED;
    length -= 1;
  }

  // setSorting(false);
};

export default bubbleSort;
