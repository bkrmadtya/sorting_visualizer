import React from "react";

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

const BarContainer = ({ array }) => {
  return (
    <div style={style}>
      {array.map((value) => (
        <div key={value}>{value}</div>
      ))}
    </div>
  );
};

export default BarContainer;
