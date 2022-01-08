import React from "react";
import Sketch from "react-p5";

let x = 33;
let y = 33;
let rectWidth = 33;
let rectHeight = 33;
let vectorx = 3;
let vectory = 3;
let c;

const Boom = (props) => {
  const setup = (p5, canvasParentRef) => {
    c = p5.createCanvas(400, 400);
    p5.noStroke();
    p5.colorMode(p5.RGB, 400);
    for (let i = 0; i < 400; i++) {
      for (let j = 0; j < 400; j++) {
        p5.stroke(i, j, 10);
        p5.strokeWeight(3);
        p5.point(i, j);
      }
    }
  };

  const draw = (p5) => {
    p5.fill(0, 0, 0);
    p5.rect(x, y, rectWidth, rectHeight);

    x += vectorx;
    y += vectory;

    if (x > p5.width || y > p5.height) {
      vectorx = -vectorx + 1;
      vectory = -vectory - 1;
    }

    if (x < 0 || y < 0) {
      vectorx = -vectorx - 1;
      vectory = -vectory + 1;
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};
export default Boom;