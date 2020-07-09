export const isArraySorted = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a.height - b.height);

  if (arr.length !== sortedArr.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].height !== sortedArr[i].height) return false;
  }

  return true;
};
