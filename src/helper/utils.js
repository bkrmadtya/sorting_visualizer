export const isArraySorted = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a.value - b.value);

  if (arr.length !== sortedArr.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value !== sortedArr[i].value) return false;
  }

  return true;
};

export const updateWithDelay = (array, SORTING_SPEED_MS, updateArrayFunc) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      updateArrayFunc([...array]);
      resolve();
    }, SORTING_SPEED_MS / array.length);
  });
};
