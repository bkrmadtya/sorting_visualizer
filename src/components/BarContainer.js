import React from "react";

const BarContainer = ({ array }) => {
  return (
    <>
      {array.map((value) => (
        <div key={value}>{value}</div>
      ))}
    </>
  );
};

export default BarContainer;
