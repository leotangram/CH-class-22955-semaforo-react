import React from "react";

const Circle = ({ color, activated }) => {
  return (
    <div
      className="circle"
      style={{ backgroundColor: activated ? color : "gray" }}
    />
  );
};

export default Circle;
