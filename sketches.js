const sketch1 = context => {
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
};


const sketch2 = context => {
  const x = 0;

  function setup() {
    background(100);
  }

  function draw() {
    ellipse(x, height / 2, 20, 20);
    x = x + 1;
  }
};
