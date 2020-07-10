import Bar from "helper/Bar";

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateBarsWithRandomHeights = (size) => {
  const set = new Set();

  while (set.size < size) {
    const randomHeight = generateRandomNumber(10, 400);
    set.add(randomHeight);
  }
  return [...set].map((i) => new Bar(i));
};
