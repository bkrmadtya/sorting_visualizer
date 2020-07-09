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
