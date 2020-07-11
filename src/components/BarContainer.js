import React from "react";

import Bar from "components/Bar";

const BarContainer = ({ array }) => {
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
  bottom: "20%",
  left: 0,
  right: 0,
  // zIndex: -5,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
};
