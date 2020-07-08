import React from "react";

import Bar from "./Bar";

const BarContainer = ({ array }) => {
  const width = 200 / array.length;
  return (
    <div style={style}>
      {array.map((value) => (
        <Bar key={value} state={{ value }} width={width} />
      ))}
    </div>
  );
};

export default BarContainer;

const style = {
  position: "absolute",
  bottom: "40%",
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
};
