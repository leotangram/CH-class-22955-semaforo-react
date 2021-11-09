import React, { memo, useEffect } from "react";
import Circle from "../circle/Circle";

const semaforoArray = [
  {
    color: "red",
    description: "Stop",
  },
  {
    color: "yellow",
    description: "Loading",
  },
  {
    color: "green",
    description: "Ready",
  },
];

const Semaforo = memo(({ semaforoIndex, setSemaforoIndex }) => {
  useEffect(() => {
    if (semaforoIndex === 2) {
      setTimeout(() => {
        setSemaforoIndex(0);
      }, 2000);
      return
    }
    setTimeout(() => {
      setSemaforoIndex(semaforoIndex + 1);
    }, 2000);
  }, [semaforoIndex]);

  return (
    <div className="semaforo-container">
      {semaforoArray.map((semaforoCircle, index) => {
        const activated = semaforoIndex === index;
        return (
          <Circle
            key={semaforoCircle.color}
            {...semaforoCircle}
            activated={activated}
          />
        );
      })}
    </div>
  );
});

export default Semaforo;
