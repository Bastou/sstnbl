import p5 from "./lib/p5.min";

const sketch = s => {
  s.drawCount = 0;
  let headCount = 0;
  let rootCount = 0;

  s.setup = () => {
    s.createCanvas(800, 800);
    s.pixelDensity(s.displayDensity());
    s.noLoop();
  };

  s.draw = () => {
    headCount = 0;
    rootCount = 0;

    const baseHeight = s.height * 0.87;

    s.background(255);
    s.push();
    s.translate(s.width / 2, baseHeight);
    s.rotate((-s.PI * 2) / 3);
    const branchLength = 130; //he ight * s.random(0, 1);
    const branchWeight = 4; //80 * s.random(0, 1);
    const twigSteps = 17; //Math.floor(30 * random(0, 1));
    createBranch(
      0,
      0,
      s.PI / 5,
      branchLength,
      branchWeight,
      twigSteps,
      0,
      false
    );
    s.pop();

    s.push();
    s.translate(s.width / 2, baseHeight);
    s.rotate(s.PI / 3);
    //const branchLengthRoot = 80; //height * random(0, 1);
    //const branchWeightRoot = 4; //80 * random(0, 1);
    //const twigStepsRoot = 17; //Math.floor(30 * random(0, 1));
    createBranch(
      15,
      0,
      s.PI / 5,
      branchLength,
      branchWeight,
      twigSteps,
      0,
      true
    );
    s.pop();

    // Draw border square
    s.strokeWeight(6);
    s.noFill();
    s.rect(0, 0, s.width, s.height);
  };

  s.touchStarted = () => {
    s.drawCount += 1;
    s.redraw();
  };

  function createBranch(
    startX,
    startY,
    branchAngle,
    branchLength,
    branchWeight,
    twigSteps,
    branchColor,
    isRoot
  ) {
    //Begin to draw branch
    let twigStartX = startX;
    let twigStartY = startY;
    let branchLengthVariations = isRoot ? s.random(1, 1.3) : s.random(0.3, 1.2);
    let twigLength =
      (headCount == 0 || (isRoot && rootCount == 0)
        ? branchLength * 0.5 // Lenght for trunk
        : branchLength * branchLengthVariations) / twigSteps; // Variable length for branches
    let branchEndWeight = branchWeight * (isRoot ? 0.9 : 0.8);

    //Divide each branch consto many twigs
    if (!(isRoot && rootCount == 0)) {
      for (let i = 0; i < twigSteps; i++) {
        const twigRandAngle = s.random(-s.PI, s.PI) * 0.05;
        const twigRandLength = s.random(1.5, 2);
        //const twigRandAngle = map(noise(headCount * 0.01), 0, 1, -s.PI, s.PI) * 0.05;
        //const twigRandLength = map(noise(headCount * 0.01), 0, 1, 1.5, 2);
        const twigEndX =
          twigStartX +
          s.cos(branchAngle + twigRandAngle) * (twigLength * twigRandLength);
        const twigEndY =
          twigStartY +
          s.sin(branchAngle + twigRandAngle) * (twigLength * twigRandLength);
        const twigWeight = s.map(
          i,
          0,
          twigSteps,
          branchWeight,
          branchEndWeight
        );

        drawTwig(
          twigStartX,
          twigStartY,
          twigEndX,
          twigEndY,
          twigWeight * (headCount == 0 ? 0.8 : 1),
          branchColor
        );

        twigStartX = twigEndX;
        twigStartY = twigEndY;
      }
    }

    //Create sub branches
    const exitWeight = isRoot ? 3 : 2;
    if (branchWeight > exitWeight) {
      const branchNum = isRoot
        ? rootCount == 0
          ? Math.floor(s.random(7, 11))
          : Math.floor(s.random(3, 6))
        : Math.floor(s.random(4, 8));

      for (let i = 0; i < branchNum; i++) {
        const newBranchX = twigStartX;
        const newBranchY = twigStartY;
        const newBranchAngleRandAdd = isRoot
          ? s.random(-s.PI / 2, s.PI / 2)
          : s.random(-s.PI / 2.5, s.PI / 2.5);
        const newBranchAngle =
          isRoot && rootCount > 0
            ? s.random(-s.PI / 2.5 + s.PI / 5, s.PI / 2.5 + s.PI / 5)
            : branchAngle + newBranchAngleRandAdd;
        const newBranchLength = branchLength * (isRoot ? 0.6 : 0.6);
        const newBranchWeight = branchEndWeight;
        const newTwigSteps = Math.floor(twigSteps * 0.9);
        const newBranchColor = Math.floor(branchColor * 0.9);

        createBranch(
          newBranchX,
          newBranchY,
          newBranchAngle,
          newBranchLength,
          newBranchWeight,
          newTwigSteps,
          newBranchColor,
          isRoot
        );
      }
    }

    if (isRoot) {
      rootCount += 1;
    } else {
      headCount += 1;
    }
  }

  function drawTwig(
    twigStartX,
    twigStartY,
    twigEndX,
    twigEndY,
    twigWeight,
    twigColor
  ) {
    //Use coordinate transformation to simplify calculation
    s.push();
    s.translate(twigStartX, twigStartY);
    s.rotate(s.atan2(twigEndY - twigStartY, twigEndX - twigStartX));

    //Draw twig from light to dark
    const gradientStep = 2;
    const gradientWeight = twigWeight / gradientStep;

    for (let i = 0; i < gradientStep; i++) {
      const x1 = -twigWeight / 2 + i * gradientWeight;
      const y1 = 0 - (headCount == 0 ? 2 : 0);
      const x2 = -twigWeight / 2 + i * gradientWeight;
      const y2 = (twigEndY - twigStartY) * (headCount == 0 ? 2 : 1);
      let c = twigColor - (gradientStep / 2) * 5 + i * 5;
      s.stroke(c);
      s.strokeWeight(gradientWeight);
      s.line(x1, y1, x2, y2);
    }

    //Draw dots
    for (let i = 0; i < twigWeight * 3; i++) {
      const dotX = s.random(-twigWeight / 2, twigWeight / 2);
      const dotY = s.random(0, twigEndY - twigStartY) - 0.1;
      s.stroke(twigColor);
      if (s.random(0, 1) < 0.2) {
        s.strokeWeight(twigWeight * s.random(0.3, 0.6)); //Draw big dot
      } else {
        s.strokeWeight(twigWeight * s.random(0.01, 0.1)); //Draw small dot
      }
      s.point(dotX, dotY);
    }
    s.pop();
  }
};

export default function sketcher(id) {
  return new p5(sketch, document.getElementById(id));
}
