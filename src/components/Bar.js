import React from "react";

const Bar = ({ state, width }) => {
  return (
    <div
      style={{
        ...barStyle,
        width,
        height: state.value,
        backgroundColor: state.backgroundColor,
      }}
    >
      {state.value}
    </div>
  );
};

export default Bar;

const barStyle = {
  color: "white",
  textAlign: "center",
  borderRadius: "5px",
  fontSize: 7,
  marginLeft: 1,
};
