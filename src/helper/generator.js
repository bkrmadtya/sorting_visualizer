const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateRandomHeights = (size) => {
  const array = new Set();
  while (array.size <= size) {
    const randomHeight = generateRandomNumber(10, 400);
    array.add(randomHeight);
  }
  return [...array].map((i) => new State(i));
};
