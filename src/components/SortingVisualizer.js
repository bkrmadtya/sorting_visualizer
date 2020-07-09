import React, { useState } from "react";

import BarContainter from "./BarContainer";

import { generateBarsWithRandomHeights } from "../helper/generator";

const SortingVisualizer = () => {
  const [array, setArray] = useState(generateBarsWithRandomHeights(100));

  const sort = () => {
    const sortedArray = [...array].sort((a, b) => a.height - b.height);

    setArray([...sortedArray]);
  };

  const reset = () => {
    setArray(generateBarsWithRandomHeights(100));
  };

  return (
    <div>
      <BarContainter array={array} />

      <button onClick={sort}>Sort</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default SortingVisualizer;
