import React from "react";

function BackgroundParticle() {
  const [pos, setPos] = React.useState([200, 200]);
  const [curPosX, setCurPosX] = React.useState(0);

  function positionUpdate(evt) {
    console.log("calling");
    console.log(evt.clientX);
    if (curPosX > evt.clientX) {
      setCurPosX(evt.clientX);
      setPos([pos[0], 200 - Math.abs(evt.clientX - curPosX)]);
    } else if (curPosX < evt.clientX) {
      setCurPosX(evt.clientX);
      setPos([pos[0], 200 + Math.abs(evt.clientX - curPosX)]);
    }
  }
  return (
    <div id="mainContainer" onMouseMoveCapture={positionUpdate}>
      <div
        style={{
          transition: "all 0.5s",
          position: "relative",
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          borderRadius: "10px",
          top: `${pos[0]}px`,
          left: `${pos[1]}px`,
          transform: "rotate(-25deg)",
          boxShadow: "0em 0em 1em 0em gray",
        }}
      ></div>
    </div>
  );
}

export default BackgroundParticle;
