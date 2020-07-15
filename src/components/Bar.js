import React, { useEffect } from "react";

const Bar = ({ bar, width }) => {
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
  // flexGrow: 1,
  // flexBasis: "0%",
  fontSize: 7,
  marginLeft: 2,
};
