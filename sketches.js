class Sketches {
  sketch1(context) {
    const x = 100;
    const y = 100;

    context.setup = function() {
      context.createCanvas(700, 410);
    };

    context.draw = function() {
      context.background(0);
      context.fill(255);
      context.rect(x, y, 50, 50);
    };
  }


  sketch2(context) {
    let x = 0;
    const height = 60;

    context.setup = () => {
      context.background(100);
    }

    context.draw = () => {
      context.ellipse(x, height / 2, 20, 20);
      x = x + 1;
    }
  }
}
