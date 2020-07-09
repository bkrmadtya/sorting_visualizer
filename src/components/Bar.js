import React from "react";

const Bar = ({ bar, width }) => {
  console.log(bar.v);
  return (
    <div
      style={{
        ...barStyle,
        width,
        height: bar.height,
        backgroundColor: bar.color,
      }}
    >
      {/* {bar.height} */}
    </div>
  );
};

export default Bar;

const barStyle = {
  color: "white",
  textAlign: "center",
  borderRadius: "5px",
  fontSize: 7,
  marginLeft: 2,
};
