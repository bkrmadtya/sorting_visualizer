import React from "react";

const Bar = ({ state, width }) => {
  return <div style={{ width, height: state.value }}>{state.value}</div>;
};

export default Bar;
