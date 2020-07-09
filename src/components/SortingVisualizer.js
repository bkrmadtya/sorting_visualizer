import React, { useState, useEffect } from "react";

import BarContainter from "./BarContainer";

import { generateBarsWithRandomHeights } from "../helper/generator";

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(50);
  const [array, setArray] = useState(generateBarsWithRandomHeights(arraySize));

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const sort = () => {
    const sortedArray = [...array].sort((a, b) => a.height - b.height);
    setArray([...sortedArray]);
  };

  const resetArray = () => {
    setArray(generateBarsWithRandomHeights(arraySize));
  };

  return (
    <div>
      <BarContainter array={array} />
      <input
        type="range"
        min={10}
        max={200}
        value={arraySize}
        onChange={({ target }) => {
          let size = target.value;

          if (size > 200 || size < 10) {
            size = 50;
          }

          setArraySize(size);
        }}
      />
      <span>Size of array :: {arraySize}</span>
      <button onClick={sort}>Sort</button>
      <button onClick={resetArray}>Reset</button>
    </div>
  );
};

export default SortingVisualizer;
