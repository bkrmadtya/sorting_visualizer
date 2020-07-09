import React, { useState } from "react";

import Bar from "./Bar";

import { generateBarsWithRandomHeights } from "../helper/generator";

const BarContainer = () => {
  const [array, setArray] = useState(generateBarsWithRandomHeights(50));
  const width = 200 / array.length;

  return (
    <div style={containerStyle}>
      {array.map((bar) => (
        <Bar key={bar.height} bar={bar} width={width} />
      ))}
    </div>
  );
};

export default BarContainer;

const containerStyle = {
  position: "absolute",
  bottom: "30%",
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
};
