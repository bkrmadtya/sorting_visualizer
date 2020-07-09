import React, { useState } from "react";

import BarContainter from "./BarContainer";

import { generateBarsWithRandomHeights } from "../helper/generator";

const SortingVisualizer = () => {
  const [array, setArray] = useState(generateBarsWithRandomHeights(50));

  return (
    <div>
      <BarContainter array={array} />
    </div>
  );
};

export default SortingVisualizer;
